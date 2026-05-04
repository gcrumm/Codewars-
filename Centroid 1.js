// Description:
// Write a function to calculate the centroid of 3D coordinates.

// Return the results as a list of 3 floats.

// My solution

function centroid(c) {
  let n = c.length;
  let sumX = 0, sumY = 0, sumZ = 0;
  for(let [x, y, z] of c){
    sumX += x;
    sumY += y;
    sumZ += z;
  }
  return [sumX / n, sumY / n, sumZ / n];
}