class Manager{
    Project: string;
    constructor(Project: string){
        this.Project = Project;
    }
}
class Tester extends Manager{
    name: string;
    constructor(name: string, Project: string){
        super(Project);
        this.name = name;
    }
}
let assign= new Tester("Riya", "Project A");
console.log(assign.name + " is assigned to " + assign.Project);