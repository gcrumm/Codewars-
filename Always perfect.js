// Description:
// While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

// So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

// If string contains 4 numbers but not consecutive it returns "not consecutive".

// My solution

function checkRoot(string){
  let arr = string.split(',')
  if(arr.length !== 4) return 'incorrect input';
  let nums = arr.map(Number);
  if(nums.some(n=> Number.isNaN(n) || n < 1 )) return 'incorrect input';

  let consecutive = nums.every((num, i) =>
    (i === 0 || num === nums[i - 1] + 1) 
  );
  if(!consecutive) return 'not consecutive';
  
  let p1 = nums.reduce((a, b) => a * b) + 1;
  let sq = Math.sqrt(p1);
  return `${p1}, ${sq}`;
}