function generateWholeNo(number)
{
    return Math.floor((Math.random()*number));
}
var num = parseInt(prompt("Enter a no......."));
document.getElementById('p1').innerHTML = "This is Random Number... "+generateWholeNo(num);
