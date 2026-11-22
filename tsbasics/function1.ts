
function student(name: string): void {
    console.log("Student Name: " + name);
}
student("Riya");


function multiply(a: number, b: number): number {
    let result: number = a * b;
    return result;
}
console.log(multiply(5, 4));


function city(cityName: string = "Ahmedabad"): void {
    console.log("City Name: " + cityName);
}
city();


function employee1(name: string, salary?: number): void {
    console.log("Employee Name: " + name);
    console.log("Salary: " + salary);
}
employee1("Daman", 30000);