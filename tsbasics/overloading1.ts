function user(id: number): number;
function user(name: string): string;

function user(value: any): any {
    return value;
}

console.log(user(101));
console.log(user("Riya"));