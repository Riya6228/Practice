class Father {
    work(): void {
        console.log("Father is working");
    }
}

class Son extends Father {
    work(): void {
        console.log("Son is studying");
    }
}

let obj5 = new Son();
obj5.work();