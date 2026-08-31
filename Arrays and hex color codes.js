// Description:
// Given an array with 3 subarrays, each containing hexadecimal color codes loosely defining red, green and blue colors based on their predominant byte value, return a string description of which of the three colors each array contains.

// Input is an array which contains 3 subarrays. These subarrays contain strings representing colors in RGB format, each string will contain one predominant color channel that is more saturated than the other two. Among all the strings in an subarray only 2 color channels will come up as predominant - the one that appears more often is "major" and the one that appears less often is "minor". Your task is to determine the major and minor colors inside each subarray and return them in the following format: {Major1}+{Minor1},{Major2}+{Minor2},{Major3}+{Minor3}.

// Example:

// input = [
//   ["FFA07A", "FA8072", "8DC4DE"],
//   ["7FFF00", "ADFF2F", "FF0000", "00FF7F", "00FF7F"],
//   ["ADD8E6", "6B8E23", "9ACD32", "32CD32", "00FF00"]
// ]

// result = "Red+Blue,Green+Red,Green+Blue"
// Explanation:

// first subarray's predominant colors: Red, Red, Blue (Red is major, Blue is minor)
// second subarray's predominant colors: Green, Green, Red, Green, Green (Green is major, Red is minor)
// third subarray's predominant colors: Blue, Green, Green, Green, Green (Green is major, Blue is minor)

// My solution

function getColors(colArr) {
  let result = [];
  
  for(let arr of colArr){
    let red = 0;
    let green = 0;
    let blue = 0;
    
    for(let color of arr){
      let r = parseInt(color.slice(0, 2), 16);
      let g = parseInt(color.slice(2, 4), 16);
      let b = parseInt(color.slice(4, 6), 16);
      if( r > g && r > b) red += 1;
      if(g > r && g > b) green += 1;
      if(b > r && b > g) blue += 1;
    }
   
    let major = Math.max(red, green, blue);
    if(major === red) result.push('Red');
    if(major === green) result.push('Green');
    if(major === blue) result.push('Blue');
    
    if(red < major && red > 0) result.push('Red');
    if(green < major && green > 0) result.push('Green');
    if(blue < major && blue > 0) result.push('Blue');
  }
  
    return `${result[0]}+${result[1]},${result[2]}+${result[3]},${result[4]}+${result[5]}`;
}