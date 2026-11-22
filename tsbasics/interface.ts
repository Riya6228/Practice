interface person {
    name: string;   
    age: number;
    greet(): void;

}

class employee implements person {
 name: string="John Doe";
 age: number=30;
 greet(): void {
     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
 }
 
}

let emp = new employee();
emp.greet();

