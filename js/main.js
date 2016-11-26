"use strict";

// Create data object
var data = {
	"responses": [],
	"payment_condition": payment_condition.name["NL"]
}; 

var article;
var t_start = performance.now();

var var_no = 0;
var data_to_submit = {};

function add_coins(moving){
	var img_50cts = $(new Image());
	img_50cts.attr("src", "img/50cents.png");
	img_50cts.addClass('coin');
	if(moving){
		img_50cts.addClass('moving-coin');
	}
	img_50cts.attr("id", "fifty_cents");
	
	var img_1euro = $(new Image());
	img_1euro.attr("src", "img/1euro.png");
	img_1euro.addClass('coin');
	if(moving){
		img_1euro.addClass('moving-coin');
	}
	img_1euro.attr("id", "one_euro");
	
	var img_2euro = $(new Image());
	img_2euro.attr("src", "img/2euro.png");
	img_2euro.addClass('coin');
	if(moving){
		img_2euro.addClass('moving-coin');
	}
	img_2euro.attr("id", "two_euro");

	$("#payment-reminder-image").append(img_50cts);
	$("#payment-reminder-image").append(img_1euro);
	$("#payment-reminder-image").append(img_2euro);
}

/**
 * Sets the content of translatable elements to the selected language.
 * @param  {string} lang EN or NL
 * @return {void}
 */
function select_language(lang){
	language = lang;
	$("#general-intro-" + language.toLowerCase()).show();
	$("#introduction-frame").fadeIn(200);

	if(lang == "NL"){
		$("#start-button").text("Begin met boodschappen doen");
		$("#buy").append("Neem mee");
		$("#skip").prepend("Laat liggen");
		$("#finished-text").html("Dank u. U wordt nu \
			doorverwezen naar de vragenlijst.<br/><br/>Een ogenblik geduld alstublieft.");
	}else{
		$("#start-button").text("Start shopping");
		$("#buy").append("Add to cart");
		$("#skip").prepend("Continue shopping");
		$("#finished-text").html("Thank you. You are now being redirected to \
			the survey.<br/><br/>Please wait a moment.");
	}

	$("#payment-intro-text").html(payment_condition.intro[lang]);
}

/**
 * Start the experiment. Activated after user presses the start button
 * @return {void}
 */
function start_experiment(){
	$("#introduction-frame").fadeOut(300,
		function(){
			payment_img_dom.css('width','100%');
			$("#payment-reminder-image").append(payment_img_dom);

			// Add static coins
			if(payment_condition.name["NL"] == "contant geld"){
				add_coins(false);
			}

			$("#payment-reminder-text").text(payment_condition.name[language]);
			$("#payment-reminder").show();
			setTimeout(function(){
				prepare_for_next();
				$("#article-frame").fadeIn(200);
			}, 1000);
		}
	)
}

function add_var(varname, varvalue){
	var_no += 1;
	data_to_submit["varname" + var_no] = varname;
	data_to_submit["varvalue" + var_no] = varvalue;
}

/**
 * Sends responses to server
 * Tuned to CenterData's C3B system.
 * @return {void}
 */
function submit_responses(){
	add_var("payment_condition", data.payment_condition.replaceAll(" ","_"));
	add_var("Q_Language", language);
	
	for(var i=0; i<data.responses.length; i++){
		var item = data.responses[i]
		var varname = item.name["NL"].toLowerCase().replaceAll(" 0%","");
		varname = varname.replaceAll(" ","_").replaceAll(",","").replaceAll("'","");
		add_var(varname + "_pos", i+1);
		add_var(varname + "_choice", item.choice);
		add_var(varname + "_RT", item.decision_time);
		add_var(varname + "_cat", item.category);
		add_var(varname + "_price", item.price);
	}
	console.log(data_to_submit);
}

/**
 * Presents the next article in the queue. If no articles are left, trigger the
 * submit_response() function
 * @return {void}
 */
function present_next_article(){
	article = articles.shift();
	// If the article list is empty, the experiment is finished
	if(article === undefined){
		$("#article-frame").hide();
		$("#payment-reminder").fadeOut('fast');
		$("#finished-frame").fadeIn('slow');
		submit_responses();
		return;
	}else{
		// Show the next article
		$("#article").html(article.image);
		$("#article-name").text(article.name[language]);
		$("#price").text(article.price);
		$("#article").fadeIn('medium', function(){
			$("#buy").removeClass('disabled');
			$("#skip").removeClass('disabled');
			t_start = performance.now();
		});
		$("#price-row").fadeIn('medium');
	}
}

/**
 * Prepare for presentation of next article in queue
 * @return {void}
 */
function prepare_for_next(){
	//Disable buttons
	$("#buy").addClass('disabled');
	$("#skip").addClass('disabled');
	$("#price-row").fadeOut('100');
	$("#article").fadeOut('100', function() {
		present_next_article();
	});
}

/** Event handling **/
$("#start-button").click(function(event) {
	start_experiment();
});

$(".continue-intro").click(function(event){
	$("#general-intro").fadeOut(200, function(){
		$("#payment-intro").fadeIn(200);
	});
});

$("#buy").click( function(event) {
	event.preventDefault();
	article.decision_time = Math.round(performance.now() - t_start);
	article.choice = "take";
	data.responses.push(article);

	if(payment_condition.name["NL"] == "contant geld"){
		add_coins(true);
		$(".moving-coin").transit({
			x: -300,
			opacity: 0,
			rotate: "-180deg"}, 1000, 'ease', function(){
				$(".moving-coin").remove();
			});
	}else if(payment_condition.name["NL"] == "pinpas" || payment_condition.name["NL"] == "creditcard"){
		$("#payment-reminder-image").transit({
			x: -100,
			}, 300, 'ease', function(){
				$("#payment-reminder-image").transit({
					x: 0,
				},300,'ease');
			}
		);
	}


	prepare_for_next();
});

$("#skip").click( function(event) {
	event.preventDefault();
	article.decision_time = Math.round(performance.now() - t_start);
	article.choice = "leave";
	data.responses.push(article);
	prepare_for_next();
});

select_language("NL");
var payment_img_dom = $(payment_condition_img);
payment_img_dom.addClass('img-responsive center-block');
$("#payment-image").append(payment_img_dom);
