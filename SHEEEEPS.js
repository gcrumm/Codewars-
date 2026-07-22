// Description:
// HI! You have the array of sheeps:

// ['sheep', 'sheep', 'sheep', 'sheep'...]

// But somebody is "sick":

// ['shpee', 'sheep', 'hspee', 'sheep', 'pehes'...]

// You can help them:

// shpee => sheep

// pehes => sheep

// Because shpee and pehes have 1 s, 1 h, 2 e, 1 p.

// shep !=> sheep

// And:

// sheeep !=> sheep

// return array(list) with "sheep". if you can't help - delete.

// Hard register!!!
// A!==a

// Example:
// ShEep !=> sheep

// EXAMPLE:

// ['sheep', 'Shpee', 'pEhEs', 'PPh', 'heep', 'phees']
// return:

// ['sheep', 'sheep']

// My solution

function reloadSheeps(arr){
  const sheep = {
    s: 1,
    h: 1,
    e: 2,
    p: 1
  }
  let validSheeps = arr.filter(word => {
    let counts = {};
    for(let char of word){
      if(counts[char]){
        counts[char]++
      }else{
        counts[char] = 1;
      }
    }
    return counts.s === sheep.s && counts.h === sheep.h && 
       counts.e === sheep.e && counts.p === sheep.p;
  })
  return validSheeps.map(word => 'sheep');
};