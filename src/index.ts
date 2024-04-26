console.log("hello world");

let age: number = 20;

if (age < 50) age += 10;
console.log(age);

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [1, 2, 3];

numbers.forEach((n) => n.toString);

// tuples
let user: [number, string] = [1, "Booker"];
user.push(1);

// enums
const small = 1;
const medium = 2;
const large = 3;

//pascal naming convention
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear: number): number {
  if (taxYear || 2022 < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000, 2022);




type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}


let employee: Employee = {
  id: 1,
  name: "Booker",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  //narrowing
  if (typeof weight === 'number') 
    return weight * 2.2;
  else
  return parseInt(weight) * 2.2
  
}

kgToLbs(10);
kgToLbs('10kg');

type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// literal 

type Quantity = 50 | 100;
let quantity: 50 | 100 = 100 ;

type Metric = 'cm' | 'inch';

//nullable types

function greet(name: string | null) {
  if (name)
  console.log(name.toLocaleUpperCase());
else 
console.log('Hola!')
};
greet('Booker');

//optional chaining
type Customer = {
  birthday: Date
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : {birthday: new Date()};
}


let customer = getCustomer(1);
//optional property access operator

  console.log(customer?.birthday?.getFullYear());


  console.log("hello world")

  console.log(employee)

  console.log(`hello my name is ${employee.name}`)