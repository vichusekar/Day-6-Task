//Write a “person” class to hold all the details

function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
            
console.log(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";
            
console.log(person2.firstName + " " + person2.lastName );


function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");
console.log(pen1);
