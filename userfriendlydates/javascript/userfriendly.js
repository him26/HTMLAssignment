var month = ['january', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'Novmber', 'December', ];

function getUserdate() {
  //get value of dates from document.....
  var firstdate = document.getElementById('date1').value;
  var seconddate = document.getElementById('date2').value;
  var firstdatearray = firstdate.split('-');
  var firstyear = parseInt(firstdatearray[0]);

  var firstmonth = parseInt(firstdatearray[1]);
  var firstnewdate = parseInt(firstdatearray[2]);

  var seconddatearray = seconddate.split('-');
  var secondyear = parseInt(seconddatearray[0]);
  var secondmonth = parseInt(seconddatearray[1]);
  var secondnewdate = parseInt(seconddatearray[2]);

  var res1 = new getfirstUserFriendlydate(firstyear, firstmonth, firstnewdate);
  var newuserfriendlyfirstdate = res1[0];
  var newuserfriendlyfirstmonth = res1[1];
  var res2 = new getSecondUserFriendlyDate(secondyear, secondmonth, secondnewdate);
  var newuserfriendlyseconddate = res2[0];
  var newuserfriendlysecondmonth = res2[1];
  if (firstyear == secondyear && firstmonth == secondmonth) {
    document.getElementById('demo').innerHTML = newuserfriendlyfirstdate + "," + newuserfriendlyseconddate + " " + newuserfriendlyfirstmonth + " " + secondyear;
  } else {
    document.getElementById('demo').innerHTML = newuserfriendlyfirstdate + " " + newuserfriendlyfirstmonth + firstyear + "<br>" + newuserfriendlyseconddate + " " + newuserfriendlysecondmonth + " " + secondyear;
  }
}

function getfirstUserFriendlydate(firstyear, firstmonth, firstnewdate) {

  if (firstnewdate == 1 || firstnewdate == 21 || firstnewdate == 31) {
    var userfriendlyfirstdate = firstnewdate + "st";
  } else if (firstnewdate == 2 || firstnewdate == 22) {
    var userfriendlyfirstdate = firstnewdate + "nd";
  } else if (firstnewdate == 3 || firstnewdate == 23) {
    var userfriendlyfirstdate = firstnewdate + "rd";
  } else {
    var userfriendlyfirstdate = firstnewdate + "th";
  }
  var userfriendlyfirstmonth = month[firstmonth - 1];
  return [userfriendlyfirstdate, userfriendlyfirstmonth];
}

function getSecondUserFriendlyDate(secondyear, secondmonth, secondnewdate) {
  //var f2 = checkValidDate(secondnewdate,secondmonth,secondyear)
  //console.log(f2);
  if (secondnewdate == 1 || secondnewdate == 21 || secondnewdate == 31) {
    var userfriendlyseconddate = secondnewdate + "st";
  } else if (secondnewdate == 2 || secondnewdate == 22) {
    var userfriendlyseconddate = secondnewdate + "nd";
  } else if (secondnewdate == 3 || secondnewdate == 23) {
    var userfriendlyseconddate = secondnewdate + "rd";
  } else {
    var userfriendlyseconddate = secondnewdate + "th";
  }
  var userfriendlysecondmonth = month[secondmonth - 1];
  return [userfriendlyseconddate, userfriendlysecondmonth];
}
