"use strict";
// let arr:number[]=[1,2,6,9,8,4,10,11];
// for(let i=0; i<=arr.length; i++){
//     if(arr[i]%2 == 0){
//         console.log(arr);
//     }
// }
//-------------------------------------------------------
// let arr:number[]=[1,2,6,9,8,4,10,11];
// for(let i=arr.length; i>=0; i--){
//     if(arr[i]%2 == 0){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);
//--------------------------------------------------------
// let Area:number =0;
// function CircleRadius(r:any) {
// Area=3.1415*r*r;
// return Area;
// }
// let result= CircleRadius(12);
// console.log(result);
//-------------------------------------------------------
// let arr:number[]=[100,49,99,62,25,40,72,11];
// for(let i=arr.length; i>=0; i--){
//     if(arr[i]< 50){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);
//----------------------------------------------------
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
