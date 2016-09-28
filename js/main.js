// Variable to store the data in.
var articles = [
{
	image: "aaa"
},{
	image: "bbb"
}
];

$("#article").fadeIn('slow');

$("#buy").click( function(event) {
	event.preventDefault();
	alert("Buying!");
});

$("#skip").click( function(event) {
	event.preventDefault();
	alert("Skipping");
});