// Question 1 
// Answer 1

// function threeSumclosest(nums , target){
//     // sort the array in ascending order 

//     let closestSum = Infinity ; 

//     for ( let i = 0 ; i < nums.length ; i++){
//         let left = i + 1 
//         let right = nums.length - 1

//         while (left < right ){
//             const sum = nums[i] + nums[left] + nums[right]
//             const diff = Math.abs(target - sum)

//             if ( diff === 0){

//                 return sum
//             }

//             if (diff < Math.abs(target - closestSum)) {
//                 closestSum = sum
//             }

//             if (sum < target ){
//                 left++
//             } else {

//                 right --
//             }
//         }
//     }

//     return closestSum;
// }

//example

// const nums  = [-1 , 2 , 1 , 4]
// const target = 1
// const result = threeSumclosest(nums , target)
// console.log(result); // output 2

//-------------------------------------------------------------------------------------------------

// Question 2 
// Answer 2

// function foursum(nums , target){
//     const result = []
//     const n = nums.length

//     if (n < 4){
//         return result ; 
//     }

//     nums.sort((a , b) => a - b);

//     for (let i = 0 ; i < n-3 ; i++){
//         if (i > 0 && nums[i] === nums[i -1]) {
//             continue ; 
//         }

//         for (let j = i+1 ; j < n - 2 ; j++){
//             if (j > i + 1 && nums[j] ===nums[j-1]) {
//                 continue ; 
//             }

//             let left = j + 1;
//             let right = n - 1


//             while (left < right ){
//                 const sum = nums[i] + nums [ j] + nums[left] + nums [ right];

//                 if (sum === target){
//                     result.push([nums[i] , nums[j] , nums[left] , nums[right]])
//                     left++
//                     right--

//                     while (left < right && nums[left] === nums[left -1]) {
//                         left++
//                     }

//                     while (left< right && nums[right] === nums[right + 1]) {
//                         right--
//                     }
//                 } else if (sum < target ) {
//                     left++;
//                 } else {
//                     right--;
//                 }
//             }
//         }
//     } 

//     return result ; 
// }

// // example

// const nums = [1 , 0, -1 , 0 , -2 , 2]
// const target = 0
// const result = foursum(nums , target)
// console.log(result);

//-------------------------------------------------------------------------------------------------

// Question 3
// Answer 3

// function nextPermutation(nums) {
//     const n = nums.length;
//     let i = n - 2;

//     // Find the first element to be replaced
//     while (i >= 0 && nums[i] >= nums[i + 1]) {
//         i--;
//     }

//     if (i >= 0) {
//         let j = n - 1;

//         // Find the smallest element in the subarray nums[i:]
//         while (j >= 0 && nums[j] <= nums[i]) {
//             j--;
//         }

//         // Swap the smallest element with nums[i]
//         swap(nums, i, j);
//     }

//     // Reverse the subarray nums[i+1:]
//     reverse(nums, i + 1);

//     return nums;
// }

// function swap(nums, i, j) {
//     const temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// function reverse(nums, start) {
//     let i = start;
//     let j = nums.length - 1;

//     while (i < j) {
//         swap(nums, i, j);
//         i++;
//         j--;
//     }
// }

// example

// const num = [1, 2, 3];
// console.log(nextPermutation(num)); // Output: [1, 3, 2]

// const num1 = [3, 2, 1];
// console.log(nextPermutation(num1)); // Output: [1, 2, 3]

// const nums = [1, 1, 5];
// console.log(nextPermutation(nums)); // Output: [1, 5, 1]

//------------------------------------------------------------------------------------------------

// Question 4
// Answer 4
// function searchInsert(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return start;
// }

// const nums = [1, 3, 5, 6];
// const target = 5;
// console.log(searchInsert(nums, target)); // Output: 2

// const nums = [1, 3, 5, 6];
// const target = 7;
// console.log(searchInsert(nums, target)); // Output: 4

// const nums = [1, 3, 5, 6];
// const target = 0;
// console.log(searchInsert(nums, target)); // Output: 0


// Question 5
// Answer 5

function plusOne(digits) {
    const n = digits.length;

    // Start from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
        // Increment the digit by one
        digits[i]++;

        // Check if there is a carry
        if (digits[i] < 10) {
            return digits; // No carry, return the result
        }

        // Carry occurs, set the digit to 0 and continue to the next digit
        digits[i] = 0;
    }

    // If there is still a carry after processing all the digits
    digits.unshift(1); // Insert a new digit 1 at the beginning

    return digits;
}


// example 1

// const digits = [1, 2, 3];
// console.log(plusOne(digits)); // Output: [1, 2, 4]

// example 2

// const digits = [9, 9, 9];
// console.log(plusOne(digits)); // Output: [1, 0, 0, 0]

//-----------------------------------------------------------------------------------------------------------------------

//  Question 6 
// Answer 6

// function singleNumber(nums) {
//     let result = 0 ;

//     for (let num of nums){
//         result ^= num;
//     }

//     return result ;
// }

// example 

// const nums = [2 , 2 , 1]
// console.log(singleNumber(nums));

// const nums = [4, 1, 2, 1, 2];
// console.log(singleNumber(nums)); // Output: 4 

//-------------------------------------------------------------------------------------------------------------

// Quesion 7
// Answer 7 

// function findMissingRanges(nums, lower, upper) {
//     const result = [];
//     let start = lower;

//     for (let num of nums) {
//         if (num === start) {
//             start++;
//         } else if (num > start) {
//             if (start === num - 1) {
//                 result.push(start.toString());
//             } else {
//                 result.push(start + '->' + (num - 1));
//             }
//             start = num + 1;
//         }
//     }

//     if (start === upper) {
//         result.push(start.toString());
//     } else if (start < upper) {
//         result.push(start + '->' + upper);
//     }

//     return result;
// }
 // example

//  const nums = [0,1,3,50,75];
// const lower = 0;
// const upper = 99;
// console.log(findMissingRanges(nums, lower, upper)); // Output: ["2", "4->49", "51->74", "76->99"]

// question 8
// answer 8

// function canAttendMeetings(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start times

//     for (let i = 1; i < intervals.length; i++) {
//         const prevEnd = intervals[i - 1][1];
//         const currentStart = intervals[i][0];

//         if (currentStart <= prevEnd) {
//             return false; // Overlapping intervals
//         }
//     }

//     return true; // No overlaps found
// }


//exaple
// const intervals =  [[0,30],[5,10],[15,20]]
// console.log(canAttendMeetings(intervals));