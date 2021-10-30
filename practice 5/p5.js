let math = prompt("Input the Math mark");
let physical = prompt("Input the Physical  mark");
let chemistry = prompt("Input the Chemistry mark");

let average = Number.parseFloat((parseFloat(math)+parseFloat(physical)+parseFloat(chemistry)) / 3);

console.log(average);

let message = "Your average mark is " + average + ". "
if (average >= 8.0)
  message += "Your rank is: A";
  else if (average >= 6.5)
  message += "Your rank is: B";
  else if (average >= 5.0)
  message += "Your rank is: C";
  else message += "Your rank is: D";
  
alert(message);
