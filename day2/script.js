//1st program
// print random 8 digit value
for (let i = 1; i <= 10; i++){
	console.log(Math.floor(Math.random()*100000000));
}

//2nd program
// print i%3==0 => foo i%5==0 => zoo  i % 3 == 0 && i % 5 == 0 => foozoo
for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("foozoo",i);
	}else if (i % 3 == 0) {
		console.log("foo",i);
	}else if (i % 5 == 0) {
		console.log("zoo",i);
	}
}


//3rd program 
// print even value in reverse order
for (let i = 20; i >= 1; i--){
	if (i % 2 == 0) {
		console.log(i);
	}
}


// 4th program pattern print
let intValue=0;
for (let i = 1; i <= 4; i++){
	for (let j = 1; j <= i; j++){
		intValue += j;
	}
	intValue += '\n';
}
console.log(intValue);


// 5th program
let first = 0;
let second = 1;
let next;
for (let i = 0; i <= 11; i++){
	console.log(first);
	next = first + second;
	first = second;
	second = next;
}
