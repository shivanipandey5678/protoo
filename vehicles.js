// Function constructor
function FourWheeler(model, color, speed, fuel) {
    this.wheels=4;
    this.model=model;
    this.color=color;
    this.speed=speed;
    this.fuel=fuel;

}

FourWheeler.__proto__.setSpeed = function(newSpeed) {
    this.speed = newSpeed;
  };
  FourWheeler.__proto__.updateColor  = function(newcolor) {
    this.color = newcolor;
  };
  FourWheeler.__proto__.updatefuel  = function(newfuel) {
    this.color = newfuel;
  };
  

// Parent object for Object.create
let FourWheelerObject = {
   
    updateSpeed: function(newspeed) {
          this.speed = newspeed;
        },
        updateColor : function(newcolor) {
          this.color = newcolor;
        },
        updatefuel : function(newfuel) {
          this.fuel = newfuel;
        }
      };


// Store function contructor object here
var car1=new FourWheeler("tuv","grey",120,"petrol");

// Store Object.create here

var car2 = Object.create(FourWheelerObject);
car2.model = "SUV";
car2.color = "Red";
car2.speed = 100;
car2.fuel = "Diesel";


export { car1, car2 };
