// Practice Q1

let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//a.
company.shift(company);
console.log(`The remaining companies are ${company}`);

//b.
company.splice(1,1,"Ola");
console.log(`The new company is ${company}`);

//c.
company.push("Amazon");
console.log(`The new companies are ${company}`);
