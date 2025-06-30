////// level 0

console.log("hello world");
let num = 10;
const num2 = "a";
console.log(num2 + num);

let a = 10;
let b = 20;
//Math Functions
console.log(Math.abs(12.78));
//square root
console.log(Math.sqrt(36)); //6

//cube root
console.log(Math.cbrt(27)); // 3

//max value
console.log(Math.max(100, 577)); //577

//min value
console.log(Math.min(200, 7)); //7

//ceil value
console.log(Math.ceil(3.555)); //4

//floor value
console.log(Math.floor(6.66)); //6

//round value  0.51 Above value console
console.log(Math.round(7.666)); //8

//round value   0.49 below value console
console.log(Math.round(7.444)); //7

//random value
console.log(Math.random()); //0 to 1 random value generated

//String operations

let str = "Ankush";

//uppercase
console.log(str.toUpperCase());

//lowercase
console.log(str.toLowerCase());

//indexof
console.log(str.indexOf("u")); // 3

//lastindexof
console.log(str.lastIndexOf("A")); // 0 last return

//chartAt
console.log(str.charAt(4)); // s

//split all value
console.log(str.split("")); // ['A','n','k','u','s','h']

//concate
console.log(str.concat(" Dhavale")); // Ankush Dhavale

//uppercase
console.log(str.slice(1, 3)); // return 1 index to 3-1 index // nk

/// level 1

// leap year

let leapYear = 2028; // 2024 2020 2028

if ((leapYear % 400 == 0 && leapYear % 100 != 0) || leapYear % 4 == 0)
	console.log(`Leap Year is : ${leapYear}`);

// bsics calculater

// let choice = parseInt(
// 	prompt("Enter Choice 1:Addition 2:Subtraction 3: Multiplication 4:Division")
// );
// let number = parseInt(prompt("Enter First Number"));
// let number2 = parseInt(prompt("Enter Second Number"));
// console.log(choice);

// switch (choice) {
// 	case 1:
// 		console.log(`Addition of the two number is ${number + number2}`);
// 		break;
// 	case 2:
// 		console.log(`Subtraction of the two number is ${number - number2}`);
// 		break;
// 	case 3:
// 		console.log(`Multiplication of the two number is ${number * number2}`);
// 		break;
// 	case 4:
// 		console.log(`Division of the two number is ${number / number2}`);
// 		break;
// 	default:
// 		console.log("Please enter valid Choice");
// }


// Level 2
// write js code to generate 3 random numbers between 1-13(A-,2-10,K,Q,J) pritn the three value and only if all three same "You win",else "You loss",

let n1 = Math.ceil(Math.random() * 13);
let n2 = Math.ceil(Math.random() * 13);
let n3 = Math.ceil(Math.random() * 13);
//console.log(n1);

// console.log(`first value is ${n1}`);
// console.log(`Second value is ${n2}`);
// console.log(`Third value is ${n3}`);

if (n1 > 10 || n1===1) {
    switch (n1) {
        case 1: console.log(`first value is A`);
            break;
        case 10: console.log(`first value is J`);
            break;
        case 11: console.log(`first value is Q`);
            break;
        case 12: console.log(`first value is K`);
            break;
    }
} else {
    console.log(`first value is ${n1}`);
}

if (n2 > 10 || n2===1) {
    switch (n2) {
        case 1: console.log(`first value is A`);
            break;
        case 10: console.log(`first value is J`);
            break;
        case 11: console.log(`first value is Q`);
            break;
        case 12: console.log(`first value is K`);
            break;
    }
} else {
    console.log(`first value is ${n2}`);
}


if (n3 > 10 || n3===1) {
    switch (n3) {
        case 1: console.log(`first value is A`);
            break;
        case 10: console.log(`first value is J`);
            break;
        case 11: console.log(`first value is Q`);
            break;
        case 12: console.log(`first value is K`);
            break;
    }
} else {
    console.log(`first value is ${n3}`);
}



if (n1 === n2 && n2 === n3) {
    alert("Congrat`s , You Win");
} else {
    alert("You Loss");
}