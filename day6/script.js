let nums = [1, 3, 6, 1, 1, 8, 1, 1, 1,1, 7, 1, 5];


const sumOfTarget = (target) => {
	for (let i = 0; i < nums.length; i++){
		let n = target - nums[i];
		for (let j = 0; j < nums.length; j++){
			if (n === nums[j]) {
				console.log(nums[i],nums[j],target);
				
			}
		}
	}
}

// sumOfTarget(9);


//valid parenthesis

let paren = "()[]{}";
const validParenthesis = (paren) => {
	for (let i = 0; i < paren.length; i++){
		if (paren.charAt(i) === '(') {
			
		}
	}
}

