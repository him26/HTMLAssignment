var url = "https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=url";
document.getElementById('url').innerHTML = "url pattern is  :" +url ;

var saecrhquery = url.split('?')[1];
document.getElementById('querystring').innerHTML = "search query in url is  :" +saecrhquery ;

var file = url.split('?')[0];
 var urlarray = file.replace('://','/').split('/');

 var protocol = urlarray[0];
 document.getElementById('protocol').innerHTML ="prtocol of url    : " + protocol ;

 var hostname = urlarray[1];
 document.getElementById('hostname').innerHTML ="host name of url    :" + hostname ;

 var path = urlarray.splice(2, urlarray.length-1);
document.getElementById('path').innerHTML ="path of url    :" + path ;
