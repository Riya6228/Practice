let fruits:string[] = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.length);
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango
console.log(fruits[3]); // Output: Orange

fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]