var responses = [];
var article;
var t_start = performance.now();

function submit_responses(){
	console.log(responses);
}

function present_next_article(){
	article = articles.shift();
	// If the article list is empty, the experiment is finished
	if(article === undefined){
		$("#article-frame").hide();
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

function prepare_for_next(){
	//Disable buttons
	$("#buy").addClass('disabled');
	$("#skip").addClass('disabled');
	$("#article").hide();
	$("#price-row").hide();
	present_next_article();
}

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

$("#payment-method").text(payment_condition);

setTimeout(function(){
	$("#payment-frame").fadeOut('fast', function(){
		present_next_article();
		$("#article-frame").fadeIn('fast');
	});
}, 2000);

