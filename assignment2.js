// Question 1 
// Answer 1

// function arrayPairSum(nums) {
//     nums.sort((a,b) => a - b); // sort the arrya in ascending array
//     let sum_min = 0;

//     for(let i = 0; i<  nums.length; i+= 2){
//         sum_min += nums[i];
//     }

//     return sum_min;
// }

// const nums  = [1 , 4 , 3 , 2]
// const maxSum = arrayPairSum(nums)
// console.log(maxSum);


//------------------------------------------

//Question 2 
// answer 2

// function distribueCandies(candyType) {
//     const uniqueCandies = new Set(candyType)
//     const maxCandies = candyType.length / 2;

//     return Math.min(uniqueCandies.size , maxCandies)
// }

// const candyType = [1 , 2 , 3 , 1 , 2 , 3 ] // here i have miss-matched the number to check that alternate code is running or not

// const maxCandies = distribueCandies(candyType);
// console.log(maxCandies);

//------------------------------------------------------------

// Question 3 
// Answer 3

// to define the length of the longest harmonious subsequence in an integer array 

// function findLHS(nums) {

//     const frequencyMap = new Map();
//     let maxLength = 0

//     //count the frequency of each number 
//     for (const num of nums ){
//         frequencyMap.set(num , (frequencyMap.get(num) || 0) + 1)
//     }

//     // find the length of the longest harmonious subsequencies

//     for(const [num , frequency] of frequencyMap.entries()) {
//         if (frequencyMap.has( num + 1)) {
//             const harmoniousLength = frequency + frequencyMap.get(num + 1 )
//             if (harmoniousLength > maxLength){
//                 maxLength = harmoniousLength
//             }
//         }
//     }
//     return maxLength
// }

// //example 

// const nums = [1 ,3 , 2 , 2, 5, 2, 3 ,7]
// console.log(findLHS(nums));

//-----------------------------------------------------------------------

// Question 4
// Answer 4

// function canPlaceFlowers(flowerbed , n){
//     let count = 0;

//     for (let i = 0 ; i < flowerbed.length ; i++){
//         if (flowerbed[i] === 0 &&
//             (i === 0 || flowerbed[i] === 0) &&
//             (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
//             ) {
//                 flowerbed[i] = 1 
//                 count++
//             }
//     }

//     return count >= n
// }

// //example 

// const flowerbed = [1 , 0 , 0 , 0 , 1]
// const n = 1
// console.log(canPlaceFlowers(flowerbed , n));

// ----------------------------------------------------------------------

// Question 5
// Answer 5

// function maximumProduct(nums) {
//     nums.sort((a,b) => a - b)

//     const maxProduct = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
//     const minProduct = nums[0] * nums[1] * nums[nums.length - 1]

//     return Math.max(maxProduct , minProduct)
// }

// //example 

// const nums = [1 , 2, 3,]
// console.log(maximumProduct(nums));

//-------------------------------------------------------------------------------------------------------------------------------

// Question 6 
// Answer 6 

// function search (nums , target) {

//     let left = 0
//     let right = nums.length  -1

//     while (left <= right ){
//         const mid = Math.floor((left + right) /2)

//         if (nums[mid] === target) {
//             return mid ; 

//         } else if (nums[mid] < target ){
//             left = mid + 1
//         } else {
//             right = mid -1
//         }
//     }
//     return -1
// }

//example

// const nums = [-1 , 0 , 3 , 5 , 9 , 12]
// const target = 9
// console.log(search(nums , target));

//--------------------------------------------------------------------------------------p--

// Question 7
// Answer  7

// function isMonotonic(nums) {
//     let isIncreasing = true;
//     let isDecreasing = true;
  
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] > nums[i - 1]) {
//         isDecreasing = false;
//       } else if (nums[i] < nums[i - 1]) {
//         isIncreasing = false;
//       }
//     }
  
//     return isIncreasing || isDecreasing;
//   }
  
  // Example usage
//   const nums = [1, 2, 3, 4, 5];
//   console.log(isMonotonic(nums)); // Output: true (the array is monotonic increasing)

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// Questio 8 
// Aanswer 8

// function minimumScore(nums, k) {
//     let minNum = Math.min(...nums);
//     let maxNum = Math.max(...nums);
  
//     if (maxNum - minNum >= 2 * k) {
//       return 0;
//     }
  
//     let minScore = Infinity;
  
//     for (let x = -k; x <= k; x++) {
//       const potentialMinNum = minNum + x;
//       const potentialMaxNum = maxNum + x;
//       const potentialScore = potentialMaxNum - potentialMinNum;
//       minScore = Math.min(minScore, potentialScore);
//     }
  
//     return minScore;
//   }
  
  // Example usage
//   const nums = [1, 3, 7];
//   const k = 3;
//   console.log(minimumScore(nums, k)); // Output: 2 (the minimum score can be achieved by adding -1 to each element)
  
  