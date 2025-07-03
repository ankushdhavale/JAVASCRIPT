// 1st program  print no of space vowel and consonants

const countVowelConsonantSpace = (val) => {
	let voCount = 0;
	let spaceCount = 0;
	let consCount = 0;
	for (let i = 0; i < val.length; i++){
		if (val.charAt(i) === 'a' || val.charAt(i) ===  'e' || val.charAt(i) ===  'i' || val.charAt(i) ===  'o' || val.charAt(i) ===  'u') {
			voCount++;
		} else if (val.charAt(i) === ' ') {
			spaceCount++;
		} else {
			consCount++;
		}
	}
	console.log(spaceCount,consCount,voCount);
	console.log(val.length);
	
}
countVowelConsonantSpace("Hello hi your name");


// 2nd program  print string is anagram or not

const isAnagarm = (str1, str2) => {
	if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
		return true;
	} else {
		return false;
	}
	
}
console.log(isAnagarm("rat", "tar"));

// 3rd program  print string is anagram or not

const letterCount = (str) => {
	for (let i = 0; i < str.length; i++){
		let count = 0;
		for (let j = i; j < str.length; j++){
			if (str.charAt(i) === str.charAt(j)) count++;
		}
		console.log(str.charAt(i),count);
		
	}
}

letterCount("prasad")

