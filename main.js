/*# Time-based styles with JavaScript

Using the clock that we just created...

1. Change the color to black if it is an odd minute and another color if it is even minute. (The 'modulus' operator might be useful here: http://www.w3schools.com/js/js_operators.asp (Links naar een externe site.)).

2. Change the background to a random color every 5 minutes.

3. Change the text color to a different color of the clock every hour, selected from an array of colors.

## Grading Criteria

1. The clock itself can be created in JavaScript or jQuery.

2. The syntax is correct and the code is indented properly.

3. All color-changing functions should properly use if-else logic utilizing the modulus operator.*/

function startTime() {
	var x = new Date();
	var h = x.getHours();
	var m = x.getMinutes();
	var s = x.getSeconds();
	var ms = x.getMilliseconds();	
	if (h < 10){
		h = "0" + h;
	}

	if (m < 10){
		m = "0" + m;
	}

	if (s < 10) {
		s = "0" + s;
	}	

	if (ms < 100) {
		ms = "0" + ms;
	} 
	if (ms < 10) {
		ms = "00" + ms;
	}
	if (ms < 1)
		ms = ms;

	function isOdd(num) {
		return m % 2;
	};
	console.log(isOdd(m));

	isOdd(m);

	if (isOdd(1)) {
		document.body.style.backgroundColor = "black";
	} else {
		document.body.style.backgroundColor = "red";
	};

	document.getElementById('Amsterdam').innerHTML = h + ":" + m + ":" + s + ":" + ms;	
	var t = setTimeout(startTime, 200);

};

startTime();


