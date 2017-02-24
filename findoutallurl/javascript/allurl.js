function bttnclick()
{
        var arrayoflinks = []
        objectoflinks = document.links;
        for(var i=0; i<objectoflinks.length; i++)
        {
            arrayoflinks.push(objectoflinks[i].href);
        }
        for (var i = 0; i < objectoflinks.length; i++)
        {
          var url = arrayoflinks.pop(objectoflinks[i].href) ;
          var para = document.createElement("ul");
          var para1 = document.createElement("li")
          para1.innerHTML = url ;
          para.appendChild(para1);
          var element = document.getElementById("div1");
          console.log(element.appendChild(para))    ;
        }
}
