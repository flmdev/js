var a = 5/7;
var b = 18/25;

var theBiggest = function() {
  var result;
  a > b ? result = ["a", a]: result = ["b", b];
  return result;
}

console.log(theBiggest());
