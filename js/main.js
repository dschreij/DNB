"use strict";

// Create data object
var data = {
	"subject_nr": 1,
	"payment_condition": payment_condition.name,
	"responses": [],
}; 

var article;
var t_start = performance.now();

/**
 * Start the experiment. Activated after user presses the start button
 * @return {void}
 */
function start_experiment(){
	$("#introduction-frame").fadeOut(300,
		function(){
			payment_img_dom.css('width','100%');
			$("#payment-reminder-image").append(payment_img_dom);
			$("#payment-reminder-text").text(payment_condition.name);
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
	console.log(data);
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
		$("#article-name").text(article.name);
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

$("#start-button").click(function(event) {
	start_experiment();
});

$("#next-intro").click(function(event){
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

/** Set up DOM in relation to variables. */
$("#payment-intro-text").html(payment_condition.intro);
var payment_img_dom = $(payment_condition_img);
payment_img_dom.addClass('img-responsive center-block');
$("#payment-image").append(payment_img_dom);

