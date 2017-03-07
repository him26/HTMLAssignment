var Vehicle1 ;
var Vehicle = function()
{
      this.maxVehiclespeed = speed;
      this.Vehicletype = type;
      this.Vehicledisplacement = displacement;
}
Vehicle.prototype.setVehicleSpeed = function(speed)
{
      this.maxVehiclespeed = speed ;
      console.log(speed);
      return this ;
}
Vehicle.prototype.setVehicleType = function(type)
{
      this.Vehicletype = type ;
      console.log(type);
      return this ;}
Vehicle.prototype.setVehicleDisplacement = function(displacement)
{
      this.Vehicledisplacement = displacement ;
      console.log(displacement);
      return this ;
}
function createVehicleobject()
{
      var speed = document.getElementById('speed').value;
      console.log(speed);
      var type = document.getElementById('type').value;
      console.log(type);
      var displacement = document.getElementById('displacement').value;
      console.log(displacement);
      Vehicle1 =   new Vehicle();
      Vehicle1.setVehicleSpeed(speed) ;
      Vehicle1.setVehicleType(type) ;
      Vehicle1.setVehicleDisplacement(displacement) ;
      console.log(Vehicle1);
      document.getElementById('output0').innerHTML = "Vehicle Object create";
}
function setSpeed()
{
      var sp =document.getElementById('newspeed').value;
      if (Vehicle1!=undefined)
      {
          console.log("I am new speed",sp);
          Vehicle1.setVehicleSpeed(sp);
      }
      else
      {
          console.log("create vehicle first");
          document.getElementById('output2').innerHTML = "create vehicle first";
        //  alert("create vehicle first");
      }
}
function getSpeed()
{
      if (Vehicle1!=undefined)
      {
          document.getElementById('output1').innerHTML = "your Vehicle spped is..."+Vehicle1.maxVehiclespeed;
      }
      else
      {
        console.log("create vehicle first");
        //  alert("create vehicle first");
          document.getElementById('output3').innerHTML = "create vehicle first";
      }
}
