var responses = [];
var article;
var t_start = performance.now();

/**
 * Start the experiment. Activated after user presses the start button
 * @return {void}
 */
function start_experiment(){
	var animation_length = 1000;
	$("#payment-frame").css("z-index", -1);
	$("#payment-controls").animate({opacity: 0}, 200, 
		function() {
			$("#payment-display").animate(
				{
					"margin-top": 0,
					"top": "20px",
					"right": "20px",
					"width": "150px",
				},
				animation_length,
				function(){
					prepare_for_next();
					$("#article-frame").fadeIn(200);
				}
			);

			payment_img_dom.animate(
				{ width: "100%" }, animation_length
			);
			$("#payment-message").hide();
		}
	)
}

/**
 * Sends responses to server
 * @return {void}
 */
function submit_responses(){
	console.log(responses);
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
		$("#payment-frame").fadeOut('fast');
		$("#finished-frame").fadeIn('slow');
		submit_responses();
		return;
	}else{
		// Show the next article
		$("#article").html(article.image);
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

$("#buy").click( function(event) {
	event.preventDefault();
	article.decision_time = Math.round(event.timeStamp - t_start);
	article.choice = "take";
	responses.push(article);
	prepare_for_next();
});

$("#skip").click( function(event) {
	event.preventDefault();
	article.decision_time = Math.round(event.timeStamp - t_start);
	article.choice = "leave";
	responses.push(article);
	prepare_for_next();
});

/** Set up DOM in relation to variables. */
$("#payment-method").text(payment_condition);
var payment_img_dom = $(payment_condition_img);
payment_img_dom.css('width','400px');
$("#payment-display").prepend(payment_img_dom);

