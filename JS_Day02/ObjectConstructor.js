var car1 = {
    brand : "Mersedes",
    mileage : 123450,
    year : 2018
};

var car2 = {
    brand : "Toyota",
    mileage : 12350,
    year : 2019
};

function car(brand, mileage, year){
    this.brand = brand;
    this.mileage = mileage;
    this.year = year;
};

var car3 = new car("Dodge", 130000, 2020);
console.log(car3);


console.log("=====================================");
function Employee(Name, ID, SSN, Salary){
    this.Name = Name;
    this.ID = ID;
    this.SSN = SSN;
    this.Salary = Salary;
}

var employee1 = new Employee("Nurzat", 1, "234-123-123", 105000);
console.log(employee1);














