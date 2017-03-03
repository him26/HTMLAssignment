window.onload = function (){
        var buttons = document.getElementsByTagName('button') ;
        console.log(typeof(buttons));
        var result = document.querySelectorAll('#result p')[0];
        console.log(typeof(result));
        var clear = document.getElementById('clear');
       console.log(clear);
       for (var i = 0; i < buttons.length; i++)
       {
              if (buttons[i].innerHTML === '=')
              {
                buttons[i].addEventListener("click", calculate(i));
              }
              else
              {
                buttons[i].addEventListener("click", addValue(i));
              }
      }
       clear.onclick = function ()
       {
            result.innerHTML = '';
       };
      function addValue(i)
      {
            console.log(i);
            return function ()
            {
              console.log( buttons[i].innerHTML);
              result.innerHTML += buttons[i].innerHTML;
            };
      }
    function calculate(i)
    {
      console.log("calculate",i);
        return function ()
        {
          var final_res = result.innerHTML;
         console.log(final_res);
         if(final_res == "")
         {
           result.innerHTML = "0";
         }else
         {
           console.log(final_res);
            result.innerHTML = eval(final_res);
          }

        };
    }
  };
