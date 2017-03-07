 function deomGolf()
{
  var par = parseInt(document.getElementById('par').value);
  var stroke = parseInt(document.getElementById('stroke').value);
  console.log(typeof(par));
  console.log(typeof(stroke));
  if(stroke == 1)
  {

    ans = "Hole-in-one!";
    //return ans;
  }
  else if(stroke<=(par-1))
  {
    ans = "Eagle";
  //  return ans;
  }
  else if(stroke == (par-1))
  {
    ans = "Birdie";
    //return ans;
  }
  else if(stroke == par)
  {
    ans = "Par";
  //  return ans;
  }
  else if(stroke == par+1)
  {
    ans = "Bogey";
  //  return ans;
  }
  else if(stroke == par+2)
  {
    ans = "Double Bogey";
  //  return ans;
  }
  else if(stroke >=par+3)
  {
    ans = "Go Home!";
  //  return ans;
  }
  console.log(ans);
  document.getElementById('output').innerHTML = ans ;
}
