/**

how to use:


>> sudo npm install -g browserify

import {without } from 'lodash';
console.log(without);

>> browserify script.js > bundle.js

then:

var _ = require('lodash');
//console.log(_);

var array = [1,2,3,4,5,6,7,8,9,0];
console.log('the number: ', _.without(array, 3));


after changes it can be written on terminal again like this:

>> browserify script.js > bundle.js

you can see the changes...

before final:
>> sudo npm install

finally, in package.json file:
					in script line, "test line" has to be changed to:
								    "build": "echo \"browserify script.js > bundle.js && live-server"
**/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
				body.style.background =
				"linear-gradient(to right, "
				+ color1.value
				+ ", "
				+ color2.value
				+ ")";

				css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
