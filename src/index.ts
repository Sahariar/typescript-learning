console.log("Hello World!");
let age: number = 29;

if (age < 50) age += 10;

// functions

function calculateTax(income: number, taxYear = 2022): number {
	if (taxYear > 2022) return income * 1.2;
	return income * 1.3;
}

console.log(calculateTax(40000));

// objects in TypeScript
type Employee = {
	readonly id: number;
	name: String;
	retire: (date: Date) => void;
};

let employee: Employee = {
	id: 1,
	name: "Sahariar",
	retire: (date: Date) => {
		console.log(date);
	},
};

// union

function kgToLbs(weight: number | string): number {
	if (typeof weight === "number") return weight * 2.2;
	else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("30");

// intersection

type Draggable = {
	drag: () => void;
};
type Resizable = {
	resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};

// literal Types(Exact and Specific)

type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metrics = "cm" | "inch";

// nullable Types

function greet(name: String | null | undefined) {
	if (name) console.log(name);
	else console.log("hola!");
}

greet(undefined);
