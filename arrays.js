//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']
let colorCopyArr = faveColors.slice(0,3)
console.log(colorCopyArr)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopyArr.push('grey')
console.log(colorCopyArr)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]
let middleNums = numbers.slice(1,4)
console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// Create an empty array called 'answers'.
let answers = []

// Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
// number in the array is GREATER than 100. 
for (i = 0; i <= 100; i++)
// If it is, push 'big' as a string to the answers array. 
if(bigOrSmallArray[i] > 100)
  {bigOrSmallArray[i] = 'big'}
// If the number is LESS than or EQUAL to 100, push 'small' as a string 
// to the answers array. 
else if(bigOrSmallArray[i] < 100)
  {bigOrSmallArray[i] = 'small'}



for (i = 0; i <= 100; i++){
  if(bigOrSmallArray[i] > 100)
  {bigOrSmallArray[i] = 'big'} 
  else if(bigOrSmallArray[i] < 100)
  {bigOrSmallArray[i] = 'small'}
}
answers = bigOrSmallArray.slice(0, bigOrSmallArray.length)
console.log(answers)