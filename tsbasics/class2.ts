// Parent Class
class Person1 {
    name: string = "Riya";

    showName(): void {
        console.log("Name:", this.name);
    }
}


class Student extends Person1 {
    showStudent(): void {
        super.showName(); 
        console.log("I am a student");
    }
}


let s1 = new Student();
s1.showStudent();
let p1 = new Student();
p1.showName();
