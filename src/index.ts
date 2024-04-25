console.log("hello world");

let age: number = 20;

if (age < 50)
    age += 10;
console.log(age);

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

function render(document: any) {
    console.log(document)
}

let numbers: number[] = [1, 2, 3];

numbers.forEach(n => n.toString)


// tuples 
let user: [number, string] = [1, "Booker"]
user.push(1);

// enums
const small = 1;
const medium = 2;
const large = 3;

//pascal naming convention
const enum Size {Small = 1, Medium , Large};
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear: number): number {
    if (taxYear || 2022 < 2022)
        return income * 1.2;
    return income * 1.3;

}
calculateTax(10_000, 2022)


