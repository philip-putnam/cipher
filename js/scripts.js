alert("Welcome to cipher");

var usrInput = prompt("Please write a sentence");

// This function takes a string, isolates the first and last character using regular expressions and places them in an array. It then capitalizes the characters and concatenates them. Returns the concatentated string.

var capFirstLast = function(sentence) {
  var first = sentence.match(/^./i); // isolates first char at beginning of input holds in array[0]
  var second = sentence.match(/.$/i); // isolates last char at end of input holds in array[0]
  first = first[0];
  second = second[0];
  var cat = first + second;
  return cat;
};

alert(capFirstLast(usrInput));
