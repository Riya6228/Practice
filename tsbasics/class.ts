class Person {
    name: string;
    constructor() {
        this.name ="";
    }

    showName() {
        console.log(this.name);
    }
}

let obj1 = new Person();
let obj2 = new Person();
obj1.name = "Dhruv";
obj2.name = "Riya";

obj1.showName();
obj2.showName();
