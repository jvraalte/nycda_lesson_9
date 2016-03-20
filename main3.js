/*# Time-based styles with JavaScript

Using the clock that we just created...*/

/*1. Change the color to black if it is an odd minute and another color if it is even minute. (The 'modulus' operator might be useful here:
http://www.w3schools.com/js/js_operators.asp (Links naar een externe site.)).*/

/*2. Change the background to a random color every 5 minutes.*/

/*3. Change the text color to a different color of the clock every hour, selected from an array of colors.*/

function startTime() {
	var x = new Date();
	var h = x.getHours();
	var m = x.getMinutes();
	var s = x.getSeconds();
	var ms = x.getMilliseconds();	
	if (h < 10){
		h = "0" + h;
	};
	if (m < 10){
		m = "0" + m;
	};
	if (s < 10) {
		s = "0" + s;
	};	
	if (ms < 100) {
		ms = "0" + ms;
	};
	if (ms < 10) {
		ms = "0" + ms;
	};
	if (ms < 1) {
		ms = ms;		
	};

	function isOdd() {
		return s % 2;
	};
/*	console.log(isOdd(m));*/
/*	isOdd();*/

	if (isOdd()) {
/*		console.log((isOdd(1)));*/
	} else {
/*		console.log("hello")*/
		function getRandomColor() {
			var letters = ["ff0000", "00ff00", "0000cc", "9900cc", "ff6600"];
			var color = '#';
			for (var i = 0; i < 1; i++ ) {
				color += letters[Math.floor(Math.random() * 5)];
			}
			return document.getElementById('Amsterdam').style.color = color;
		}
		getRandomColor("getElementById('Amsterdam').color");	
	};


	
	setInterval(function() {

	}, 5 * 1000); 

	document.getElementById('Amsterdam').innerHTML = h + ":" + m + ":" + s + ":" + ms;	
	var t = setTimeout(startTime, 1000);

};

startTime();