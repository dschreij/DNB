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
	name: "Chips",
	image: "img/Chips.jpeg",
	price: "1,69",
	category: "vice"
},{
	name: "Apple",
	image: "img/apple.png",
	price: "1,99",
	category: "virtue"
},{
	name: "Pineapple",
	image: "img/pineapple.png",
	price: "2,99",
	category: "virtue"
},{
	name: "Snickers",
	image: "img/snickers.png",
	price: "1,00",
	category: "vice"
},{
	name: "Magnum",
	image: "img/magnum.png",
	price: "1,50",
	category: "vice"
},{
	name: "Strawberries",
	image: "img/strawberries.png",
	price: "2,49",
	category: "virtue"
}
];

var payment_conditions = [
	"contant geld",
	"pinpas",
	"credit card",
	"contactloos betalen",
];

// Preload images
for(var i = 0; i < articles.length; i++){
	var img = new Image();
	img.src = articles[i].image;
	articles[i].image = img;
	$(img).addClass('img-responsive');
	$(img).addClass('center-block');
}

// Randomize order
shuffle(articles);

var payment_condition = payment_conditions[Math.floor(Math.random() * 
	payment_conditions.length)];