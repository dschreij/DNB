"use strict";
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
		name: "Special K original",
		image: "img/special k cereal.jpg",
		price: 2.99,
		category: "virtue"
	},{
		name: "Perzikschijven",
		image: "img/perziken.JPG",
		price: 2.59,
		category: "virtue"
	},{
		name: "Kelloggs honey pops",
		image: "img/cereal honey.JPG",
		price: 3.09,
		category: "vice"
	},{
		name: "Oreo cookies, white chocolate",
		image: "img/oreo wit.JPG",
		price: 2.17,
		category: "vice"
	},{
		name: "Almhof 0% yoghurt",
		image: "img/yoghurt.JPG",
		price: 1.25,
		category: "virtue"
	},{
		name: "Havermout",
		image: "img/havermout.JPG",
		price: 2.19,
		category: "virtue"
	},{
		name: "Cruesli naturel",
		image: "img/cruesli.jpg",
		price: 3.49,
		category: "virtue"
	},{
		name: "Spa water",
		image: "img/water.JPG",
		price: 1.65,
		category: "virtue"
	},{
		name: "Volkoren brood",
		image: "img/brood.JPG",
		price: 2.09,
		category: "virtue"
	},{
		name: "Muffin",
		image: "img/muffin.JPG",
		price: 2.49,
		category: "vice"
	},{
		name: "Blikje coca cola",
		image: "img/coca cola regular.jpg",
		price: 0.57,
		category: "vice"
	},{
		name: "Warme chocolade melk",
		image: "img/chocolate.JPG",
		price: 1.58,
		category: "vice"
	},{
		name: "Oreo cookies",
		image: "img/oreo.JPG",
		price: 1.25,
		category: "vice"
	},{
		name: "Carrot cake",
		image: "img/carrotcake.JPG",
		price: 2.99,
		category: "vice"
	},{
		name: "Granola havervlokken",
		image: "img/granola.JPG",
		price: 1.99,
		category: "virtue"
	},{
		name: "Bonen in tomatensaus",
		image: "img/baked bean.JPG",
		price: 1.57,
		category: "virtue"
	},{
		name: "Appeltaart",
		image: "img/appeltaart.JPG",
		price: 3.99,
		category: "vice"
	},{
		name: "Cheesecake",
		image: "img/cheesecake.JPG",
		price: 4.99,
		category: "vice"
	},{
		name: "Cake",
		image: "img/cakeplak.JPG",
		price: 1.09,
		category: "vice"
	},{
		name: "Time out chocolade koeken",
		image: "img/choc cookies.JPG",
		price: 1.79,
		category: "vice"
	}
];

var payment_conditions = [
	{
		"name": "contant geld",
		"image": "img/Euro_banknotes.png"
	},
	{
		"name": "pinpas",
		"image": "img/pin-logo.gif"
	},
	{
		"name": "credit card",
		"image": "img/credit-cards.png"
	},
	{
		"name": "contactloos betalen",
		"image": "img/contactloos-betalen.jpg"
	}
];

// Preload images
for(var i = 0; i < articles.length; i++){
	var img = new Image();
	img.src = articles[i].image;
	articles[i].image = img;
	$(img).addClass('img-responsive');
	$(img).addClass('center-block');
	$(img).css('max-height','450px');
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

