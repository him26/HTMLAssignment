var calculation = function()
{
    this.firstele = 0;
    this.secondele = 0 ;
}
calculation.prototype.setfirstele = function(firstele)
{
    this.firstele = firstele;
    console.log(firstele);
    return this
};
calculation.prototype.setsecondele = function(secondele)
{
    this.setsecondele = secondele;
    console.log(secondele);
    return this
};
calculation.prototype.sum = function ()
{
    var x = this.firstele ;
    var y = this.setsecondele;
    var s = x+y;
    return s
}
function bttnclick()
{
    var   first = document.getElementById('first').value;
    var   second = document.getElementById('second').value;
    var x =  parseInt(first);
    var y =  parseInt(second);
    var clc2 = new calculation();
    clc2.setfirstele(x);
    clc2.setsecondele(y);
    var r = clc2.sum();
    document.getElementById('sum').innerHTML ="Sum of two numbers  "+ r ;
}
