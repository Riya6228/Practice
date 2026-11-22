class Parent2{
    greet(): void{
        console.log("Hello from Parent");
}
}
class Child2 extends Parent2{
    greet(): void{
        console.log("Hello from Child");
    }
}
let child2obj = new Child2();
child2obj.greet();