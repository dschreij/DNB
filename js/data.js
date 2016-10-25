"use strict";

/**
 * To be determined by user selection.
 * @type {String}
 */
var language = "";

/**
 * replaceAll polyfill for string
 * @param  {string} search      the string segment to replace
 * @param  {string} replacement the replacement string
 * @return {string}             the string with all occurences of 'search' replaced
 * by 'replacement'
 */
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var redirect = function(url) {
	var dom = window.document.createElement('form');

	var parts = url.split('?');
	var url_ = parts[0], params = parts[1] || '';
	var paramlist = params.split('&');

	dom.setAttribute('method', 'get');
	dom.setAttribute('action', url_);
	dom.style.display = 'none';
	dom.style.visibility = 'hidden';

	var e, kv, k, v;
	for (var i = 0; i < paramlist.length; ++i) {
		kv = paramlist[i].split('=');
		k = kv[0];
		v = kv[1];
		e = window.document.createElement('input');

		e.setAttribute('type', 'hidden');
		e.setAttribute('name', decodeURIComponent(k));
		e.setAttribute('value', decodeURIComponent(v));

		dom.appendChild(e);
	}

	window.document.body.appendChild(dom);
	dom.submit();
}

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// Variable to store the data in.
var articles = [
	{
		name: {
			"NL": "Special K original",
			"EN": "Special K original"
		},
		image: "img/special k cereal.jpg",
		price: 2.99,
		category: "virtue"
	},{
		name: {
			"NL": "Perzikschijven",
			"EN": "Diced peaches"
		},
		image: "img/perziken.JPG",
		price: 2.59,
		category: "virtue"
	},{
		name: {
			"NL": "Kelloggs honey pops",
			"EN": "Kelloggs honey pops"
		},
		image: "img/cereal honey.JPG",
		price: 3.09,
		category: "vice"
	},{
		name: {
			"NL": "Oreo koekjes, witte chocolade",
			"EN": "Oreo cookies, white chocolate"
		},
		image: "img/oreo wit.JPG",
		price: 2.17,
		category: "vice"
	},{
		name: {
			"NL": "Almhof 0% yoghurt",
			"EN": "Almhof 0% yoghurt"
		},
		image: "img/yoghurt.JPG",
		price: 1.25,
		category: "virtue"
	},{
		name: {
			"NL": "Havermout",
			"EN": "Oatmeal"
		},
		image: "img/havermout.JPG",
		price: 2.19,
		category: "virtue"
	},{
		name: {
			"NL": "Cruesli naturel",
			"EN": "Cruesli naturel"
		},
		image: "img/cruesli.jpg",
		price: 3.49,
		category: "virtue"
	},{
		name: {
			"NL": "Spa water",
			"EN": "Spa water"
		},
		image: "img/water.JPG",
		price: 1.65,
		category: "virtue"
	},{
		name: {
			"NL": "Volkoren brood",
			"EN": "Wholewheat bread"
		},
		image: "img/brood.JPG",
		price: 2.09,
		category: "virtue"
	},{
		name: {
			"NL": "Muffin",
			"EN": "Muffin"
		},
		image: "img/muffin.JPG",
		price: 2.49,
		category: "vice"
	},{
		name: {
			"NL": "Blikje coca cola",
			"EN": "Can of Coke"
		},
		image: "img/coca cola regular.jpg",
		price: 0.57,
		category: "vice"
	},{
		name: {
			"NL": "Warme chocolade melk",
			"EN": "Hot chocolate"
		},
		image: "img/chocolate.JPG",
		price: 1.58,
		category: "vice"
	},{
		name: {
			"NL": "Oreo koekjes",
			"EN": "Oreo cookies"
		},
		image: "img/oreo.JPG",
		price: 1.25,
		category: "vice"
	},{
		name: {
			"NL": "Carrot cake",
			"EN": "Carrot cake"
		},
		image: "img/carrotcake.JPG",
		price: 2.99,
		category: "vice"
	},{
		name: {
			"NL": "Granola havervlokken",
			"EN": "Granola oat flakes"
		},
		image: "img/granola.JPG",
		price: 1.99,
		category: "virtue"
	},{
		name: {
			"NL": "Bonen in tomatensaus",
			"EN": "Beans in tomato sauce"
		},
		image: "img/baked bean.JPG",
		price: 1.57,
		category: "virtue"
	},{
		name: {
			"NL": "Appeltaart",
			"EN": "Apple pie"
		},
		image: "img/appeltaart.JPG",
		price: 3.99,
		category: "vice"
	},{
		name: {
			"NL": "Cheesecake",
			"EN": "Cheesecake"
		},
		image: "img/cheesecake.JPG",
		price: 4.99,
		category: "vice"
	},{
		name: {
			"NL": "Cake",
			"EN": "Cake"
		},
		image: "img/cakeplak.JPG",
		price: 1.09,
		category: "vice"
	},{
		name: {
			"NL": "Time out chocolade koeken",
			"EN": "Time out chocolate cookies"
		},
		image: "img/choc cookies.JPG",
		price: 1.79,
		category: "vice"
	}
];

var payment_conditions = [
	{
		"name": {
			"NL": "contant geld",
			"EN": "cash"
		},
		"image": "img/Euro_banknotes.png",
		"intro": {
			"NL": "Bij deze winkel kunt u alleen CONTANT BETALEN. \
				Electronische betaalmiddelen worden niet geaccepteerd.<br><br/>U zult genoeg \
				contant geld mee moeten nemen om te kunnen betalen.",
			"EN": "Please note that this store accepts CASH PAYMENTS ONLY. They do not accept electronic \
				payment methods.<br><br/> \
				You will have to bring enough cash to the store so that you can give cash for all the \
				products that you purchase from this store."
		}
	},
	{
		"name": {
			"NL": "pinpas",
			"EN": "debit card"
		},
		"image": "img/pin-logo.gif",
		"intro": {
			"NL": "Bij deze winkel wordt u verzocht te pinnen.",
			"EN": "At this store you are requested to pay by debit card."
		}
	},
	{
		"name": {
			"NL": "creditcard",
			"EN": "credit card",
		},
		"image": "img/credit-cards.png",
		"intro": {
			"NL": "Deze winkel accepteert alle bekende credit cards.",
			"EN": "This store accepts all major credit cards."
		}
	},
	{
		"name": {
			"NL": "contactloos betalen",
			"EN": "contactless payment"
		},
		"image": "img/contactloos-betalen.jpg",
		"intro": {
			"NL": "Bij deze winkel kunt u contactloos betalen.",
			"EN": "At this store you can make contactless payment."
		}
	}
];

// Preload images
for(var i = 0; i < articles.length; i++){
	var img = new Image();
	img.src = articles[i].image;
	articles[i].image = img;
	$(img).addClass('img-responsive');
	$(img).addClass('center-block');
	$(img).css('max-height','auto');
	$(img).css('width','100%');
}

// Randomize order
shuffle(articles);

// Pick payment method randomly
var payment_condition = payment_conditions[Math.floor(Math.random() * 
	payment_conditions.length)];

// Create a DOM image and load the approriate source for the selected payment
// method.
var payment_condition_img = new Image();
payment_condition_img.src = payment_condition.image

