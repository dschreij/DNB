"use strict";

// Create data object
var data = {
	"responses": [],
	"payment_condition": payment_condition.name["NL"]
}; 

var article;
var t_start = performance.now();

/**
 * Sets the content of translatable elements to the selected language.
 * @param  {string} lang EN or NL
 * @return {void}
 */
function select_language(lang){
	language = lang;
	$("#general-intro-" + language.toLowerCase()).show();
	$("#language-selection-frame").fadeOut(300, function(){
		$("#introduction-frame").fadeIn(200);
	});

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
			$("#payment-reminder-text").text(payment_condition.name[language]);
			$("#payment-reminder").show();
			setTimeout(function(){
				prepare_for_next();
				$("#article-frame").fadeIn(200);
			}, 1000);
		}
	)
}

/**
 * Sends responses to server
 * @return {void}
 */
function submit_responses(){
	var data_to_submit = {
		"payment_condition": data.payment_condition.replaceAll(" ","_"),
		"Q_Language": language
	};
	
	for(var i=0; i<data.responses.length; i++){
		var item = data.responses[i]
		var varname = item.name["NL"].toLowerCase().replaceAll(" 0%","");
		varname = varname.replaceAll(" ","_").replaceAll(",","").replaceAll("'","");
		data_to_submit[varname + "_pos"] = i+1;
		data_to_submit[varname + "_choice"] = item.choice;
		data_to_submit[varname + "_RT"] = item.decision_time;
		data_to_submit[varname + "_cat"] = item.category;
		data_to_submit[varname + "_price"] = item.price;
	}
	var query_string = $.param(data_to_submit);
	setTimeout(function(){
		window.location.replace("http://fppvu.qualtrics.com/SE/?SID=SV_6PrL3yqVzqZvxWt&" + query_string);
	},1000);
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
	$("#article").hide();
	$("#price-row").hide();
	present_next_article();
}

/** Event handling **/
$("#button-dutch").click(function(event) {
	select_language("NL");

});

$("#button-english").click(function(event) {
	select_language("EN");
});

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
	article.decision_time = Math.round(event.timeStamp - t_start);
	article.choice = "take";
	data.responses.push(article);
	prepare_for_next();
});

$("#skip").click( function(event) {
	event.preventDefault();
	article.decision_time = Math.round(event.timeStamp - t_start);
	article.choice = "leave";
	data.responses.push(article);
	prepare_for_next();
});

var payment_img_dom = $(payment_condition_img);
payment_img_dom.addClass('img-responsive center-block');
$("#payment-image").append(payment_img_dom);
