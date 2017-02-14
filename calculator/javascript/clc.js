    //method for perform the operation
function performoperation()
{
    var firstinput=document.getElementById('input1').value;
    if(firstinput == ""||isNaN(firstinput))
    {
      alert("please enter First number");
    }
    var secondinput=document.getElementById('input2').value;
    if(secondinput == ""||isNaN(secondinput))
    {
      alert("please enter Second number");
    }
    var operation=document.getElementById('sel').value;
    if(operation == "")
    {
      alert("please select a operation which you want to perform");
    }
    var rel=0;
    if(operation == "Add")
    {
       rel = add(firstinput,secondinput);
    }
    else if (operation == "Sub")
    {
        rel = sub(firstinput,secondinput);
    }else if (operation == "Mul")
    {
        rel = mul(firstinput,secondinput);
    }else if (operation == "Div")
    {
        rel = div(firstinput,secondinput);
    }
    document.getElementById('res').value=rel;

}
//Method for Addition
function add(input1,input2)
{
    var result;
    result = parseInt(input1)+parseInt(input2);
    return result;
}
//Method for Subtraction
function sub(input1,input2)
{
    var result;
    result = parseInt(input1)-parseInt(input2);
    return result;
}
//Method for Multiplication
function mul(input1,input2)
{
    var result;
    result = parseInt(input1)*parseInt(input2);
    return result;
}
//method for division
function div(input1,input2)
{
    var result;
    result = parseInt(input1)/parseInt(input2);
    return result;
}
