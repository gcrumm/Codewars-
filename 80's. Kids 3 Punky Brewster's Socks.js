// Description:
// Punky loves wearing different colored socks, but Henry can't stand it.

// Given an array of different colored socks, return a pair depending on who was picking them out.

// Example:

// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

// If there is no possible combination of socks, return an empty array.

// My solution

function getSocks(name, socks) {
  let punkySocks = [];
  let henrySocks = [];
  
  if(name === 'Punky'){
    for(let i = 1; i < socks.length; i++){
      if(socks[0] !== socks[i]){
        punkySocks.push(socks[0], socks[i])
        break;
      }
    }
    return punkySocks;
    
    }else{
      let count = {};
      for(let sock of socks){
        count[sock] = (count[sock] || 0) + 1;
      }
      
    for(let color of Object.keys(count)){
      if(count[color] >= 2){
        henrySocks.push(color, color)
        break;
      }
    }
      
    return henrySocks;
   }
  }