//#1st Question
// let num = parseInt(prompt("Enter Num"));

// console.log("------ Automated Test Execution------------");
// for (let i = 1; i <= num; i++) {
//     console.log(`Runnung Test Case #${i}: Checking system performance...`);
// }
// console.log(`------ All ${num} Test Cases Completed ----------`);

// //#2st Question

// let sum = 0;
// for (let i = 0; i < num; i++){
//     sum += i;
// }
// console.log(`Sum is : ${sum}`);

//#3st Question progrss bar || Print pattern
// let pattern = "";
// for (let i = 0; i < num; i++){
//     for (let j = 0; j<= i; j++){
//         pattern += "*";
//     }
//     pattern += "\n";
// }
// console.log(pattern);

// let pattern = "";
// for (let i = 0; i < num; i++){
//     for (let j = 0; j<= i; j++){
//         pattern += "=";
//     }
//     pattern += "\n";
// }
// console.log(pattern);

// //#4st Question  password check

let pass = prompt("Enter Password");

let countLowerChar = 0;
let countDigit = 0;
let countUpperChar = 0;
for (let i = 0; i < pass.length; i++) {
	let digit = parseInt(pass.charAt(i)) < 9 && parseInt(pass.charAt(i)) > 0;
	let upperChar = pass.charAt(i) <= "Z" && pass.charAt(i) >= "A";
	let lowerChar = pass.charAt(i) <= "z" && pass.charAt(i) >= "a";
	if (digit) countDigit++;
	if (upperChar) countUpperChar++;
	if (lowerChar) countLowerChar++;
}

if (countDigit && countUpperChar) {
	alert("Strong Password");
} else if (countDigit || countLowerChar || countUpperChar) {
	alert("Medium Password");
}
