//Regular funcion, called explicity by name:
function multiply() {
  var result = 3 * 4;
  console.log(" 3 * 4 is ", result);
}

multiply();

// Anonymous function storede in variable
//Invoked by calling the variable as a function:
var divided = function() {
  var result = 3 / 4;
  console.log(" 3 / 4 is ", result);
}

divided();

//inmediately Invoked Function Expression
//Runs as soon as the browser finds it:
(function() {
  var result = 12 / 0.75;
  console.log("12 / 0.75 is ", result);
}())
