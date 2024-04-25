"use strict";
console.log("hello world");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toString);
let user = [1, "Booker"];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear || 2022 < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Booker",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=index.js.map