// Description:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
// My solution

function calc(x){
  let total1 = '';
  for(let char of x){
    total1 += char.charCodeAt(0);
  }
  
  let total2 = '';
  for(let num of total1){
    if(num == 7){
      num = 1;
      total2 += num;
    }else{
      total2 += num;
    }
  }
  
  total1 = total1.split('').map(Number).reduce((a, b) => a + b);
  total2 = total2.split('').map(Number).reduce((a, b) => a + b);
  return total1 - total2;
}