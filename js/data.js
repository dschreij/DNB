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
			"NL": "Appels",
		},
		image: "img/appels.JPG",
		price: 2.99,
		category: "virtue"
	},{
		name: {
			"NL": "Wortels",
		},
		image: "img/wortels.jpg",
		price: 1.39,
		category: "virtue"
	},{
		name: {
			"NL": "Maaltijdsalade met zalm",
		},
		image: "img/zalmsalade.png",
		price: 3.52,
		category: "virtue"
	},{
		name: {
			"NL": "Yoghurt",
		},
		image: "img/yoghurt.JPG",
		price: 1.25,
		category: "virtue"
	},{
		name: {
			"NL": "Groene thee",
		},
		image: "img/thee.JPG",
		price: 1.49,
		category: "virtue"
	},{
		name: {
			"NL": "Walnoten",
		},
		image: "img/walnoten.png",
		price: 2.49,
		category: "virtue"
	},{
		name: {
			"NL": "Water",
		},
		image: "img/water.JPG",
		price: 0.65,
		category: "virtue"
	},{
		name: {
			"NL": "Volkoren brood",
		},
		image: "img/brood.JPG",
		price: 2.09,
		category: "virtue"
	},{
		name: {
			"NL": "Aardbeien",
		},
		image: "img/aardbeien.png",
		price: 3.19,
		category: "virtue"
	},{
		name: {
			"NL": "Snoeptomaten",
		},
		image: "img/tomaten.png",
		price: 1.79,
		category: "virtue"
	},{
		name: {
			"NL": "Frikandelbroodje",
		},
		image: "img/frikandelbroodje.jpeg",
		price: 1.09,
		category: "vice"
	},{
		name: {
			"NL": "Cola",
		},
		image: "img/coca cola regular.jpg",
		price: 0.57,
		category: "vice"
	},{
		name: {
			"NL": "Chips",
		},
		image: "img/chips.JPG",
		price: 1.29,
		category: "vice"
	},{
		name: {
			"NL": "Muffins",
		},
		image: "img/muffin.JPG",
		price: 2.99,
		category: "vice"
	},{
		name: {
			"NL": "Ham/kaas croissant",
		},
		image: "img/hamkaas-croissant.png",
		price: 0.75,
		category: "vice"
	},{
		name: {
			"NL": "Chocoladereep",
		},
		image: "img/cote_d_or.jpg",
		price: 2.69,
		category: "vice"
	},{
		name: {
			"NL": "Appeltaart",
		},
		image: "img/appeltaart.JPG",
		price: 5.99,
		category: "vice"
	},{
		name: {
			"NL": "Gevulde koeken",
		},
		image: "img/gevuldekoeken.png",
		price: 1.88,
		category: "vice"
	},{
		name: {
			"NL": "Kaasstengels",
		},
		image: "img/kaasstengels.JPG",
		price: 2.19,
		category: "vice"
	},{
		name: {
			"NL": "Ijs",
		},
		image: "img/BenAndJerry.jpg",
		price: 1.99,
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
			"NL": "U gaat bij deze winkel <em>contant betalen</em>.<br/> \
				Electronische betaalmiddelen worden niet geaccepteerd.",
			"EN": "Please note that this store accepts <em>cash payments</em> \
				only. They do not accept electronic payment methods."
		}
	},
	{
		"name": {
			"NL": "pinpas",
			"EN": "debit card"
		},
		"image": "img/bankpas.png",
		"intro": {
			"NL": "U gaat bij deze winkel betalen met uw <em>pinpas</em>.<br/> \
				Contant geld wordt niet geaccepteerd.",
			"EN": "You are going to pay with <em>debit card</em> at this store."
		}
	},
	{
		"name": {
			"NL": "creditcard",
			"EN": "credit card",
		},
		"image": "img/CreditCard.png",
		"intro": {
			"NL": "U gaat bij deze winkel betalen met uw <em>credit card</em>.<br/>\
				Contant geld wordt niet geaccepteerd.",
			"EN": "You are going to pay with <em>credit card</em> at this store."
		}
	},
	{
		"name": {
			"NL": "contactloos betalen",
			"EN": "contactless payment"
		},
		"image": "img/contactloos-betalen.jpg",
		"small_image": "img/bankpas.png",
		"intro": {
			"NL": "U gaat bij deze winkel <em>contactloos betalen</em>.<br/>\
				Contant geld wordt niet geaccepteerd.",
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
	0: 0.40,	// cash
	1: 0.30,	// pin
	2: 0.15,	// credit card
	3: 0.15,	// contactloos betalen
})];

// Create a DOM image and load the approriate source for the selected payment
// method.
var payment_condition_img = new Image();
payment_condition_img.src = payment_condition.image;
