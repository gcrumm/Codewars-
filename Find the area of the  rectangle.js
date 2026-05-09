// Description:
// Find the area of a rectangle given its diagonal and one side. If the diagonal is less than or equal to the side length, return "Not a rectangle".

// My solution

function area(d, l) {
  if(d <= l){
    return "Not a rectangle";
  }
  let w = Math.sqrt(d ** 2 - l ** 2);
  return w * l;
}