let arr =  [1, 50,  28,  2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];
let newArray = [];

// new array
for (let i = 0; i < arr.length; i++) {
  if (newArray.indexOf(arr[i]) === -1) {
    newArray.push(arr[i])
  }
}
console.log("new array that removed the duplicated numbers:",newArray);

// sum
let sum = 0;
for (let i = 0; i < newArray.length; i++) {
  sum+=newArray[i];
}
console.log("sum of all array elements after removing duplicates:",sum);

//Find the odd numbers & Find the even numbers.
let even = [];
let odd = [];
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] % 2 == 0) {
    even.push(newArray[i])
  } else {
    odd.push(newArray[i])
  }
}
console.log("the even numbers ",even);
console.log("the odd numbers: ",odd);


//Sort array of numbers by ascending
newArray.sort(function(a, b) {
  return a - b;
});
console.log(newArray);

//Find the prime numbers
function isPrime(n) {
  if(n < 2) return false;
  for (var i = 2; i < n; i++) {
      if(n%i==0)
          return false;
  }
  return true;
}
let prime = [];
for (let i = 0; i < newArray.length-1; i++) {
    if (isPrime(newArray[i])) {
      prime.push(newArray[i])
    }
  }
console.log("the prime numbers: ",prime);

// Find the perfect numbers  

function findSubNumbers(n){
  const subNumbers = [];
  for (let count = 1; count < n; count ++){
    if (n % count ===0) {
    subNumbers.push(count);
  }
}
return subNumbers;
}

function calculateSum(n){
  let total = 0;
  const subNumbers = findSubNumbers(n);
  subNumbers.forEach(function(n){
    total += n;

  });
  return total;
}

function checkPerfectNumber(n) {
  let isPerfectNumber = false;
  let sumSubNumber = calculateSum(n);
  
  if (sumSubNumber == n) {
    isPerfectNumber = true;
    return isPerfectNumber;
  } 
  return isPerfectNumber;
} 

function findPerfectNumber(arr){
  let perfectNumbers = [];
  arr.forEach(function(n) {
    const isPerfectNumber = checkPerfectNumber(n);
    if (isPerfectNumber){
      perfectNumbers.push("the perfect numbers:");
    }
  });

  return perfectNumbers;  
}
const perfectNumbers = findPerfectNumber(arr);
console.log(perfectNumbers);


