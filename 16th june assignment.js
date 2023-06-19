//Question 1
//Solution 1

// function twosums(Sums , target) {

//     // creating a complement of each number and its indes

//     const complementMap = new Map();

//     // sorting the array

//     for ( let i  = 0; i < nums.length; i++){
//         const num = nums[i];
//         const complement = target- num;

//         // checking if the complement of the current numbr exist in the map

//         if(complementMap.has(complement)) {
//             //return the two number

//             return [complementMap.get(complement) , i];
//         }

//         //if the complement doesn't exist , store the current the value

//         complementMap.set(num , i);
//     }

//     // if there is no solution found , empty array should be written

//     return [] ;
// }

//example usage

// const nums = [5 , 2 , 6 , 22 ];
// const target = 7;
// const result = twosums(nums, target);
// console.log(result); // output : [0 , 1]

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Question 2
//Solution 2

// function removeElement(nums , val){
//     let k = 0;

//     for (let i = 0; i< nums.length; i++){
//         //check if the current element is not equal to val

//         if (nums[i] !== val){

//             nums[k] = nums[i]
//             k++;
//         }
//     }

//     return k;
// }

//example

// const nums = [2 , 3 , 3 , 2];
// const val = 3;
// const result = removeElement(nums , val);
// console.log(result);

//-------------------------------------------------------------------------------------------------------------------------------------------

//Question 3
//Answer 3

// function searchInsert(nums , target){
//     let left = 0;
//     let right = nums.length - 1 ;

//     while (left <= right) {

//         const mid = Math.floor((left + right) /2);

//         if(nums[mid] === target){
//             return mid;
//         } else if (nums[mid] < target){
//             left = mid + 1;

//         } else {
//             right = mid -1;
//         }

//     }

//     return left;
// }

//example

// const nums = [1 , 3 , 5 , 9];
// const target = 4;
// const result = searchInsert(nums , target);
// console.log(result);
//-------------------------------------------------------------------------------------------------------------------------------------------
//Question 4
//Answer 4

// function plusOne(digits){

// const n = digits.length;

// for (let i = n - 1; i>= 0 ; i--){

//     //increment the current digit by one
//     digits[i]++;

//     //chekc if the there's an array

//     if(digits[i] < 10) {
//         //no array. we're done

//         return digits;
//     }

//     //array occured , set the current digit to 0
//     digits[i] = 0;
// }

//     // if all didgits had a array, add an additional leading digit to 1

//     digits.unshift(1);

//     return digits;

// }

//example

// const digits = [1,2,9];
// const result = plusOne(digits);
// console.log(result); //output: [1,3,0]

//----------------------------------------------------------------------------------------------------------------------------------------

//question 5
// Answer 5

// To merge two sorted array into a single sorted array, we can use two-pointer approach


// function merge(num1 , m , num2 , n){
//     let p1 = m -1 ; //pointer for num1
//     let p2 = n -1;
//     let p = m+n - 1;

//     while (p1 >=0 && p2 >= 0){
//         if (num1[p1] >= num2[p2]){
//             num1[p] = num1[p1];
//             p1--;

//         } else {
//             num1[p] = num2[p2];
//             p2--;
//         }
//         p--;
//     }

//     //if there are reamining elements in num2 copy them into to num1

//     while (p2 >= 0){
//         num1[p] = num2[p2]
//         p2--;
//         p--;
// }
// }

// //example

// const num1 = [4 , 5 , 6 , 0 , 0 , 0];
// const m = 3;
// const num2 = [5 , 7 , 8];
// const n = 3;
// merge(num1 , m , num2 , n);
// console.log(num1);

//------------------------------------------------------------------------------------------------------------------------------------

//Question 6
// answer 6

//to determine if any value appears at least twice in an integer array,  we can utilize a set data structure to keep track of the uniqu values encountered while iterating through the array.

// function constainDuplicate(nums) {
    // const uniqueSet = new Set();

    // for (const num of nums ){
    //     if (uniqueSet.has(num)) {
    //         return true;
    //     }

    //     uniqueSet.add(num);

    // }

    // return false;
// }

//example

// const nums = [5 , 6 , 6, 8]; // output: true; (repeating value)
// const nums= [5 , 6 , 7 , 8]; // output: false; (distinct value)
// const result = constainDuplicate(nums);
// console.log(result); 

//----------------------------------------------------------------

//Question 7
// Answer 7

// t move all zeros to the en of the integer array while maintaining the relative order is used to iterate a two-pointer approach.

// function moveZeroes(nums){
//     let p1 = 0;
//     let p2 = 0;

//     //move all non-zero elements to the begninning of the array
//     while (p1 < nums.length) {
//         if( nums[p1] !== 0) {
//             nums[p2] = nums[p1];
//             p2++;
//         }

//         p1++;
//     }

//     //fill the remaining positions with zeros

//     while (p2 < nums.length) {
//         nums[p2] =0;
//         p2++;
//     }
// }
 
//example

// const nums= [0 , 55 , 56, 0 , 57, 0 ];
// moveZeroes(nums);
// console.log(nums);

//----------------------------------------------------------------

//Question 8
// Answer 8

// To find the number that occurs twice and the number that is missing in an integer array, you can utilize a set data structure to keep track of the unique numbers encountered while iterating through the array

function findErrorNums(nums){
    const numSet = new Set();
    let duplicate;
    let missing;

    //find the duplicate number

    for(const num of nums){
        if(numSet.has(num)){
            duplicate = num;
        }else {
            numSet.add(num);

        }
}

        const n = nums.length;

        //find the missing number
        for ( let i = 1; i <= n; i++){
            if(!numSet.has(i)){
                missing = i;
                break;
            }
        }

        return [duplicate , missing];
}

// example

const nums = [1 , 2 , 2 , 4];
const result = findErrorNums(nums);
console.log(result); // output [2 , 3]