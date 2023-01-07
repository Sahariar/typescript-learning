"use strict";
console.log('Hello World!');
let age = 29;
if (age < 50)
    age += 10;
function calculateTax(income, taxYear = 2022) {
    if (taxYear > 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(40000));
//# sourceMappingURL=index.js.map