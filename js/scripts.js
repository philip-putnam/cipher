alert("Welcome to cipher");

var usrInput = prompt("Please write a sentence");

// This function takes a string, isolates the first and last character using regular expressions and places them in an array. It then capitalizes the characters and concatenates them. Returns the concatentated string.

var capFirstLast = function(sentence) {
  var first = sentence.match(/^./i); // isolates first char at beginning of input holds in array[0]
  var second = sentence.match(/.$/i); // isolates last char at end of input holds in array[0]
  first = first[0];
  second = second[0];
  // Capitalizes
  var cat = first.toUpperCase() + second.toUpperCase();
  return cat;
};

// Reverses the order of the input of a two letter string
var reverseOrder = function(string){
  var start = string[0];
  var end = string[1];
  var result = end+start;
  return result;

};

// function calling other functions and returning the switch cap letters after running both functions.
var functionRunner = function(string) {
  var cipher = reverseOrder(capFirstLast(string));
  var newString = fourthFunction(string);
  string = newString + cipher;
  return string;
};

// function to add beginning cipher based on middle letter
var fourthFunction = function(string) {
  var countHalf = (string.length/2).toFixed();
  string = string[countHalf] + string;
  return(string);
};


//alert(functionRunner(usrInput));

alert(functionRunner(usrInput));
