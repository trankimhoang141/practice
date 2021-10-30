function checkNumber(value) {
  if(isNaN (parseInt [value] !== "NaN")) {
    return true;
  }
  return false;
}

let value = prompt("Please input a number!");
const isNumber = checkNumber(value);
if (isNumber)  {
  alert("Please input a number!");
} else if (parseInt(value) < 0) {
  alert("Please input a positive number!");
} else {
  alert("Congratulations! You did it!");
}

let email = prompt("Please input your email");

if (email.length > 8 || email.charAt(0) === '@' || email.indexOf('@') === -1) {
  alert("Your email is not valid")
}
else {
  alert("Congratulations!")
}




