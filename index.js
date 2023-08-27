"use strict";
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arr = [1, 2, 6, 9, 8, 4, 10, 11];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr);
    }
}
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let arr = [1, 2, 6, 9, 8, 4, 10, 11];
for (let i = arr.length; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
        arr.splice(i, 1);
    }
}
console.log(arr);
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
let Area = 0;
function CircleRadius(r) {
    Area = 3.1415 * r * r;
    return Area;
}
let result = CircleRadius(12);
console.log(result);
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array
let arr = [100, 49, 99, 62, 25, 40, 72, 11];
for (let i = arr.length; i >= 0; i--) {
    if (arr[i] < 50) {
        arr.splice(i, 1);
    }
}
console.log(arr);
// Write a program that uses a function to find the largest element in an array of numbers
let arr = [100, 49, 99, 62, 25, 402, 72, 11];
function LargeNumber(arr) {
    let max = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let Result = LargeNumber(arr);
console.log(Result);
