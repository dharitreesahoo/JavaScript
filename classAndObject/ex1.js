class employee{
    constructor(empId , name)
    {
        this.empId = empId;
        this.name = name;
    }

    printName()
    {
        console.log(`name of the empoyee ${this.name}`);
    }
}
employee1 = new employee(1007,"papa");
employee1.printName();