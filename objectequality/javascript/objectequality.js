var Car;
var Bike;

function vehicle(name, speed, price, displacement) {
  this.firstname = name;
  this.lastname = speed;
  this.page = price;
  this.pcity = displacement;
}
var Car = new vehicle("honda city", 150, 50000, 300);
var Bike = new vehicle("honda shine", 250, 500000, 3000);
var Bike2 = Bike;

function objectequality(obj1, obj2) {
  var result;
  if (obj1 == obj2 || obj1 === obj2)
  {
    result = 'object are same';
  }
  else 
  {
    result = 'object are not same';
  }
  return result;
}
var res = objectequality(Bike, Car);
document.getElementById('ans').innerHTML = res;
