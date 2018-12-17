var integer1 = Math.floor(Math.random()*4)+1;
var integer2 = Math.floor(Math.random()*4)+1;
var integer3 = Math.floor(Math.random()*4)+1;
var product = integer1*integer2*integer3
console.log("Product of "+integer1+", "+integer2+", and "+integer3+" is "+product)
var correct = false;
var answer;
var tries = 1;
while (correct == false && tries < 4){
  if (tries < 4){
    answer = prompt("Product of "+integer1+", "+integer2+", and "+integer3+"? This is attempt "+tries+" out of 3.");
  if (answer == product){
    if (tries == 1)alert("That's correct! The product of "+integer1+", "+integer2+", and "+integer3+" is "+product+"! You got it in "+tries+" try!");
    else alert("That's correct! The product of "+integer1+", "+integer2+", and "+integer3+" is "+product+"! You got it in "+tries+" tries!");
    correct = true;
  } else {
    if (tries == 3) {
      alert("The answer wasn't correct; it was actually "+product+".");
      correct = true;
    } else {
      alert("The answer wasn't correct. Try again!");
      tries++;
    }
  }
  }
}