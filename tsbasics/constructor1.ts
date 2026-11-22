class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}

let emp1 = new Employee("Riya", 25000);

console.log(emp1.name);
console.log(emp1.salary);
