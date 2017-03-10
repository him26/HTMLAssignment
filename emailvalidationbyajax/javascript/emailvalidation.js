function IsValidEmail(email)
 {
    console.log("i am in isvalidmail method",email);
    var reg = /^([a-zA-Z0-9\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/ ;
    var flag = reg.test(email);
    console.log(flag);
    return flag;
 }
function ValidateEmail(email)
{
  var resultstring;
  console.log("I am in validemail method",email);
    if (IsValidEmail(email))
    {
      console.log("valid");
    //  alert("valid");
      return resultstring = "valid";
    }
    else
    {
        console.log("Invalid");
        //alert("Invalid");
        return resultstring = "Invalid";
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
          addemail(dataarray);
          console.log(dataarray);
          for (var i = 0; i < dataarray.length; i++)
          {
            var temp = dataarray[i];
            console.log(temp);
            var ul = document.getElementById('pos');
            var li = document.createElement('li');
            li.innerHTML = temp;
            ul.appendChild(li);
          }
        }
    };
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
}
var addemail = function(dataarray)
{
  this.temp = dataarray;
  //console.log(temp);
}
addemail.prototype.add = function()
{
    var res ;
    var addlist = temp.shift();
    if (addlist!=undefined)
    {
       res = ValidateEmail(addlist);
      // console.log(addlist);
      return addlist+" is "+res;
    }
    else
    {
      //alert("email list is empty");
      res = "email list is empty";
      return res;
    }
  }
  function loaddata()
  {
  var a  =  new addemail();
  var res = a.add();
  console.log(res);
  var overlay = document.getElementById("overLay");
  var xpopup = document.getElementById("xPopup");
  document.getElementById('output').innerHTML = res;
  overlay.style.display = "block";
  xpopup.style.display = "block";
  overlay.onclick = function ()
  {
      overlay.style.display = "none";
      xpopup.style.display = "none";
  };
  }
//   function del()
//   {
//     var inputvalue = list.length;
//     console.log("gfn",inputvalue);
//     var data = list.remove(inputvalue);
//      if (data["data"]!=undefined||inputvalue<0)
//      {
//       console.log(list);
//     //  console.log("hi...........");
//       var ul = document.getElementById('removelist');
//       //console.log(ul);
//       var li = ul.getElementsByTagName("li");
//       //var li1 = l
//       for (var i = 0; i < li.length; i++)
//       {
//           var temp =  li[i].innerHTML;
//           if(temp === data["data"])
//           {
//           //  console.log(data);
//           console.log(i);
//         //  ul.removeChild(ul.childNodes[i]);
//             li[i].innerHTML = "";
//           }//var li = document.createElement('li');
//           //console.log(temp);
//       }
//     }
//     else
//      {
//          alert("your element is not available");
//      }
//   }
// function but()
// {
// var a  =  new addElement();
// a.add();
// }
// function search()
// {
//   var value = document.getElementById('searchdata').value;
//   var searchdata = list.searchAt(value);
//   if (searchdata!=undefined||searchdata!=null)
//   {
//     alert("your element "+searchdata["data"]+" is available in list");
//     console.log("I am search data",searchdata);
//   }
//   else
//   {
//     alert("your element is not found");
//   }
//   console.log("I am search data",searchdata);
// }
