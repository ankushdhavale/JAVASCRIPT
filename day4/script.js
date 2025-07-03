//1st program: write a function which has an array of numbers and print each value square
let arr = [2, 3, 4, 5, 6];
const x = arr.map((ele) => {
	return ele * ele;
})

console.log(x);//[4,9,16,25,36]

//2nd program: write a function which has an array of numbers and check weather given value is matching in array or not

const findValueInArray = (val) => {
	console.log(arr.includes(val));
} 

findValueInArray(40);//false

//3rd program: write a function which has an aray of numbers and print only 5 multiple

let arr1 = [2, 4, 5, 10, 30, 23, 21, 20];

const MultipleValue = arr1.filter((ele) => {
		return ele % 5 == 0;
	})

console.log(MultipleValue);


//easy

//1st program write a function which has an array and return largest and smallet value in an array


const largestValue = () => {
	let large = arr[0];
	arr.map((ele) => {
		if (large < ele) {
			large = ele;
		}
	})
	console.log("Largest Value is : ",large);	
}
const smallestValue = () => {
	let small = arr[0];
	arr.map((ele) => {
		if (small > ele) {
			small = ele;
		}
	})
	console.log("Smallest Value is : ",small);	
}

largestValue();
smallestValue();



//2 program write a function which has an array and print product of all values

const multipleValues = () => {
	let mul = 1;
	arr.map((ele) => {
		mul *= ele;
	})
	console.log("Array Multiple value is : ",mul);
	
}

multipleValues();


//3 write a function which have given array of integer find two numbers whose sum is target number
const numbers = [5, 12, 7, 20, 1, 18, 9, 3, 14, 6, 25, 8, 11, 2, 10];
const findTargetNo = (target) => {
	for (let i = 0; i < numbers.length; i++){
		for (let j = 0; j < numbers.length; j++){
			if (numbers[i] + numbers[j] === target) {
				console.log(numbers[i],numbers[j]);
			}
		}
	}
}

findTargetNo(12);

let num = [[1, 4], [3, 6], [4, 5]];//[5,9,9]

const sumNestedArray = () => {
	let fil = [];
	num.filter((ele) => {
		let sum = 0;
		ele.filter((e) => {
			 sum += e;
		})
		fil.push(sum);
	})
	console.log(fil);
}

sumNestedArray();


//medium
//1
//write a function which has an array and iterate through the array and find maximum consecutive 1`s

let nums = [1, 3, 6, 1, 1, 8, 1, 1, 1,1, 7, 1, 5];

const consecutiveNum = () => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			count++;
		}
	}
	console.log(count);
}
	
consecutiveNum();