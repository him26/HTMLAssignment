var par = parseInt(prompt("enter value of par............."));
var stroke = parseInt(prompt("enter value of stroke......"));

function deomGolf(par,stroke)
{

  if(stroke == 1)
  {
    return "Hole-in-one!";
  }
  else if(stroke<=(par-1))
  {
    return "Eagle";
  }
  else if(stroke == (par-1))
  {
    return "Birdie";
  }
  else if(stroke == par)
  {
    return "Par";
  }
  else if(stroke == par+1)
  {
    return "Bogey";
  }
  else if(stroke == par+2)
  {
    return "Double Bogey";
  }
  else if(stroke >=par+3)
  {
    return "Go Home!";
  }
}

var ans = deomGolf(par,stroke);
console.log(ans);
document.getElementById('output').innerHTML = "output according to stroke............."+ans ;
