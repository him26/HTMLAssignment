function IsValidEmail(email)
 {
    console.log("i am in isvalidmail method",email);
    var reg = /^([a-zA-Z0-9\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/ ;
    var flag = reg.test(email);
    console.log(flag);
    return flag;
 };
function ValidateEmail(email)
{
  console.log("I am in validemail method",email);
    if (IsValidEmail(email))
    {
      console.log("valid");
    }
    else
    {
        console.log("Invalid");
    }
}
function loadDoc()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
          var data = this.responseText;
          var dataarray = data.split(',');
          for (var i = 0; i < dataarray.length; i++)
          {
            var temp = dataarray[i];
            console.log(temp);
            ValidateEmail(temp);
          }
          console.log(dataarray);
          document.getElementById("demo").innerHTML =this.responseText;
        }
    };
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
}
