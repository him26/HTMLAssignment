window.onload = function ()
 {
        var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
        for (var i = 0, l = params.length; i < l; i++)
        {
             tmp = params[i].split('=');
             data[tmp[0]] = tmp[1];
        }
        document.getElementById('name').innerHTML = "Student name is : " + data.name.replace('+',' ');
        document.getElementById('rollno').innerHTML = "Student roll no is : " + data.roll;
        document.getElementById('age').innerHTML = "Student age : " + data.age;
}
