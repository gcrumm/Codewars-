// Description:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My solution

function fakeBin(x){
  let answer = ''
  for(let i = 0; i < x.length; i++){
    let num = Number(x[i])
    if(num < 5){
      answer += '0'
    }else{
      answer += '1'
    }
  }
  return answer
}