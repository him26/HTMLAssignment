var calculation = function() {
  return function(x) {
    return function(y) {
      return x + y;
    }
  }
}

function sum() {
  var x = document.getElementById('first').value;
  var y = document.getElementById('second').value;
  var res1 = calculation();
  var res2 = res1(parseInt(x));
  var res3 = res2(parseInt(y));
  console.log(res3);
  document.getElementById('sum').innerHTML = "sum of two number is  " + res3;
}
