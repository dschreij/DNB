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

function weightedRand(spec) {
	var i, j, table=[];
	for (i in spec) {
		// The constant 10 below should be computed based on the
		// weights in the spec for a correct and optimal table size.
		// E.g. the spec {0:0.999, 1:0.001} will break this impl.
		for (j=0; j<spec[i]*100; j++) {
		  table.push(i);
		}
	}
	return table[Math.floor(Math.random() * table.length)];
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
			"NL": "Wortels",
			"EN": "Carrots"
		},
		image: "img/wortels.jpg",
		price: 1.39,
		category: "virtue"
	},{
		name: {
			"NL": "Plakjes luxe kaas",
			"EN": "Slices of deli cheese"
		},
		image: "img/kaas.JPG",
		price: 4.05,
		category: "virtue"
	},{
		name: {
			"NL": "Cote d'Or chocolade",
			"EN": "Cote d'Or chocolate"
		},
		image: "img/cote_d_or.jpg",
		price: 2.69,
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
			"NL": "Bij deze winkel kunt u alleen <em>contant betalen</em>. \
				Electronische betaalmiddelen worden niet geaccepteerd.<br><br/>U zult genoeg \
				contant geld mee moeten nemen om te kunnen betalen.",
			"EN": "Please note that this store accepts <em>cash payments</em> only. They do not accept electronic \
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
			"NL": "U gaat bij deze winkel betalen met uw <em>pinpas</em>.",
			"EN": "You are going to pay with <em>debit card</em> at this store."
		}
	},
	{
		"name": {
			"NL": "creditcard",
			"EN": "credit card",
		},
		"image": "img/credit-cards.png",
		"intro": {
			"NL": "U gaat bij deze winkel betalen met <em>credit card</em>.",
			"EN": "You are going to pay with <em>credit card</em> at this store."
		}
	},
	{
		"name": {
			"NL": "contactloos betalen",
			"EN": "contactless payment"
		},
		"image": "img/contactloos-betalen.jpg",
		"intro": {
			"NL": "U gaat bij deze winkel betalen met <em>contactloos betalen</em>.",
			"EN": "You are going to use <em>contactless payment</em> at this store."
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

// Randomize order of articles
shuffle(articles);

// Pick payment method randomly, but attach more weight to some items than other.
var payment_condition = payment_conditions[weightedRand({
	0: 0.4,		// cash
	1: 0.3,		// pin
	2: 0.15,	// credit card
	3: 0.15,	// contactloos betalen
})];

// Create a DOM image and load the approriate source for the selected payment
// method.
var payment_condition_img = new Image();
payment_condition_img.src = payment_condition.image

