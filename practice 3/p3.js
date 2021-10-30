let str = "Hello world! I'm a newbie in programming.";
console.log(str)

//string length
console.log(str.length);

//Count
let count = 0;
for (let i = 0; i < str.length; i++)
  if (str[i] == " ") {
    count+= 1;
}
count += 1; 
console.log("words appeared in the string above: ",count)

//Find the position of the word “newbie”.

console.log("the position of the word “newbie”: ",str.search("newbie"))

//Replace word “programming” in the string above by the uppercase one.

console.log(str.replace("programming", "PROGRAMMING"))