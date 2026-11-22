//create fuction
//parameters/input/arguments
//return type what this function will return
//function with parameters
function greet(name: string): void {
    console.log("Hello, " + name);
}
greet("Dhruv");
//function with parameters and return type sum(2.2)=4
function sum(a: number, b:number): number{
    let c: number = a + b;
    return c;
}
console.log(sum(3,6));

//function with default parameter

function campanyname(name: string="Roicians"): void{
    console.log("Company name is: "+name);
}
campanyname("Roicians");


//function with optional parameter
function details(name:string, age?: number): void{
    console.log("Name: "+name);
    console.log("Age: "+age);
}
details("Dhruv", 25);