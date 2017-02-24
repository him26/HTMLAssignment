function person(fname,lname,age,city)
{
    this.firstname = fname;
    this.lastname = lname;
    this.page = age;
    this.pcity = city;
}
var myFather = new person("John", "Doe", 50, "mumbai");
var myMother = new person("Sally", "Rally", 48, "mumbai");
function objectequality(obj1,obj2)
{
    var result;
    if(obj1 == obj2 || obj1 === obj2)
    {
        result = 'object are same';
    }
    else
    {
        result = 'object are not same';
    }

    return result;
}
 var res =  objectequality(myFather,myMother);
 document.getElementById('ans').innerHTML=res;
  
