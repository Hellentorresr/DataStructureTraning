
//Find the maximum and minimum element in an array Write a function that returns the maximum and minimum elements in an array.

//Solution
//1. could be to return a string with the 2 numbers
//2. could be returnin a new array with the 2 values the maximum and minimum
//--Math.max()  this method doesn't iterate over array elemts, it expects a list of numbers as arguments: Math.max(1, 2, 3)

const MaximumAndMinumumValues = (array) => {
    return `Max number is: ${Math.max(...array)}, min number is: ${Math.min(...array)}`;
};

console.log(MaximumAndMinumumValues([1, 3, 8, 2, 6]));



//Reverse an array Write a function that takes an array as input and returns the array reversed.;
const ReverseArray = (array) => array.reverse();

console.log(ReverseArray([5, 4, 3, 8]));


//Remove duplicates from an array Write a function that removes duplicates from an array.
const RemoveDuplicates = (array) => new Set(array);

console.log(RemoveDuplicates([2, 6, 8, 5, 2, 6, 9, 5]));