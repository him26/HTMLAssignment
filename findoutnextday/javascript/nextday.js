function currentDay()
         {
               var d=new Date();
               days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
               months = ["Jan","Feb","March","April","May","June","July","Aguast","September","October","November","December",];
               var currentdate = d.getDate();
               var cyear = d.getFullYear();
               var currentday = days[d.getDay()];
               var currmonth = months[d.getMonth()];
               document.getElementById("Today").innerHTML = "Current Day : "+currentdate+"  "+currentday+"  "+currmonth+"  "+cyear;
               Date.prototype.getNextDay = function ()
                             {
                                 d.setDate(d.getDate()+1);
                                 var date  = d.getDate();
                                 var Month = months[d.getMonth()];
                                 var year  = d.getFullYear();
                                 var day   = days[d.getDay()];
                                 var nextday ="Next Day : "+date+" "+day+" "+Month+" "+year
                                 return nextday;
                             }
                document.getElementById("next").innerHTML = d.getNextDay();
         }
currentDay();
