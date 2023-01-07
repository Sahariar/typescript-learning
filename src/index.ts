console.log('Hello World!');
let age:number = 29;

if(age < 50)
    age +=10

    // functions

    function calculateTax (income:number , taxYear = 2022):number {
            if(taxYear > 2022)
            return income * 1.2
                return income * 1.3
            }

console.log(calculateTax(40000));


// objects in TypeScript

let employee : {
    readonly id: number,
    name:String,
    retire : (date : Date) => void
} = {id: 1 , name:"Sahariar" , retire:(date: Date)=>{
    console.log(date);
}}



