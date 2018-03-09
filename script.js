// Write a function that returns the last digit of given integer
// as an English word. Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"

function returnLastNumberAsWord(number) {
	var arrWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine'];
		//return arrWord[+String(number).substr(-1)];
		return arrWord[+String(number).slice(-1)];
}
var number = 562;
console.log(number + ' -> ' + returnLastNumberAsWord(562));

//Write a function that reverses the digits of given decimal number. Example: 256 -> 652

function reverseNumber(number) {
	var arr1 = String(number).split('');
	var arr2 = arr1.reverse();
	return +arr2.join('');
} 
console.log(number + ' -> ' + reverseNumber(number));

// Write a function that finds all the occurrences of word in a text
//     * The search can be case sensitive or case insensitive
//     * Use optional parameters

function findOccurrencesWordInText(word, text, register) {
	if (register === undefined) {
		var register =  0;
	}
	if (register === 1) {
		return text.includes(word); 
	}
	else {
		return text.toLowerCase().includes(word.toLowerCase()); 
	}

}
console.log(findOccurrencesWordInText('Want', 'I want to lose fat'));


// Write a function to count the number of divs on the web page

function countDiv() {
	var arrDiv = document.getElementsByTagName('div');
	return arrDiv.length;
}

console.log(countDiv());

// 5. Write a function that counts how many times given number appears in given array.
//  Write a test function to check if the function is working correctly.

function countAppearsNumberInArray(number, arr) {
	arr1 = arr.filter(element => element == number);
	return arr1.length;
}

function checkCorrectness(result) {
	if (countAppearsNumberInArray(number, arr) === result){
		return 'ok';
	} 
	else {
		return 'mistake  in function';
	}
}
var number = 5;
var arr = [1, 2, 3, 4, 5, 7, 8, 9, 5, 27, 5, 5];
console.log('number =' + number + ' appers in arrayr ' + countAppearsNumberInArray(number, arr)+ ' times');
console.log(checkCorrectness(4));




// 6. Write a function that checks if the element at given position in given array of integers 
// is bigger than its two neighbors (when such exist).

function checkNeighbors(position, arr) {
	if (position === 0) {
		if (arr[position] < arr[position+1]) {
			return false;
		}
	} 
	if (position === arr.length-1) {
			if (arr[position] < arr[position-1]){
				return false;
			}
	}
	if ((arr[position] < arr[position-1]) || (arr[position] < arr[position+1])){
		return false;
	}
	return true;
}
console.log(checkNeighbors(1, arr));

// 7. Write a Function that returns the index of the first element in array that is bigger 
// than its neighbors, or -1, if there’s no such element. Use the function from the previous exercise.

function returnIndexBiggerElement(arr) {
	for (var i = 0; i < arr.length; i++) {
		if  (checkNeighbors(i,arr)) {
			return i;
		}	
	}
}
console.log(arr);
console.log(returnIndexBiggerElement(arr));