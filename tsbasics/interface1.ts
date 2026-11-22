interface associate {
    name: string;
    age: number;
    greet(): void;
}

class empid implements associate {
    name: string = "Dhruv";
    age: number = 29;

    greet(): void {
        console.log("My Name is " + this.name);
        console.log("I am " + this.age + " years old");
    }
}

let obj = new empid();
obj.greet();