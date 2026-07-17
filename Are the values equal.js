// Description:
// Create the areEqual function that will return true if the two supplied arguments hold exactly the same values and the same number of values (not necessarily in the same order) and false if they do not.

// The supplied arguments will be objects, arrays and strings.

// Examples:

// {laura:4, adam:3} & {laura:4, adam:3} => true 
// {adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
// [{a:4},{b:3}] & [{b:3},{a:4}]) => true
// {a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
// 'Hello' & 'Hello' => true

// My solution

function areEqual(value1, value2) {
  if(value1 === value2) return true;
  if(typeof value1 !== typeof value2) return false;
  if(Array.isArray(value1) !== Array.isArray(value2)) return false;
  if(typeof value1 !== 'object' || value1 == null || value2 == null) return false;
  
  if(Array.isArray(value1)){
    if(value1.length !== value2.length) return false;
      let newB = [...value2];
      for (const value of value1) {
      const index = newB.findIndex(element => areEqual(element, value));
      if (index === -1) return false;
      newB.splice(index, 1);
}
   return true;
}
  
  if(Object.keys(value1).length !== Object.keys(value2).length) return false;
  for(const key of Object.keys(value1)){
    if(!key in value2) return false;
    if(!areEqual(value1[key], value2[key])) return false;
  }
   return true;
    }