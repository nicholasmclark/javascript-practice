// document.write("Hello Word!<br/>");
// window.alert("Hello World!");
// console.log("Hello World!");

// var cTemp = 100;
// var fTemp = ((cTemp + 9)/5) +32;
// document.write("Temperature in Celsius is: " + cTemp + "<br />");
// document.write("Temperature in Farenheight is: " + fTemp + "<br />");

// function sayHello() {
// 	window.alert("Hello!");
// }

// sayHello();

// var cube = 10;

// function cubeMe(cube) {
// 	alert(cube * cube * cube);
// }

// function alertButton(name, id, value) {
// 	alert("The button name is " + name + "\n The id name is " + id + "\n The value name is " + value);
// }

// function printAnswer(answer1) {
// 	alert(answer1);
// }

// enterName();

// var fullName;
// var getConfirmation;

// function enterName() {
// 	fullName = prompt("Please enter your full name");
// 	if (fullName == null) {
// 		enterName();
// 	} else {
// 		confirmation = getConfirmation();
// 	}
// 	if (confirmation == false) {
// 		enterName();
// 	}
// }

// function getConfirmation() {
// 	return confirm("Your entered name is " + fullName + "?");
// }

// alert(confirmation);

// alert("You've visited " + history.length + " web pages in this browswer session");

var selector;

selector = prompt("Enter an int to pick what you want to see");

if (selector == 1) {

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = "Good evening";
}
else if (hourNow > 12) {
	greeting = "Good afternoon";
}
else if (hourNow > 0) {
	greeting = "Good morning";
}

alert(greeting);
}

else if (selector == 2) {
	
}

else if (selector > 2) {
	alert("coming soon!");
}

