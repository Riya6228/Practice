class Parent{
    features: string ="";

    parentMethod(){
        console.log("This is parent method");
    }
}
class Child extends Parent{
ChildMethod(){
    console.log("This is child method");

}
}

let childobj = new Child();
let parentobj = new Parent();
class GrandChild extends Child{
    GrandChildMethod(){
        console.log("This is grandchild method");
    }

}
let grandchildobj = new GrandChild();

console.log("Parent Features: ", parentobj.features);
parentobj.parentMethod();
console.log("Child Features: ", childobj.features);
childobj.parentMethod();
childobj.ChildMethod();
console.log("Grandchild Features: ", grandchildobj.features);
grandchildobj.parentMethod();
grandchildobj.ChildMethod();
grandchildobj.GrandChildMethod();