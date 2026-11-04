// Description:
// Time, time, time. Your task is to write a function that will return the degrees on a analog clock from a digital time that is passed in as parameter. The digital time is of type string and will be in the format 00:00.

// Discrete hour hand movement is required - snapping to each hour position and also coterminal angles are not allowed.

// You also need to return the degrees on the analog clock in type string and format 360:360 . Remember to round off the degrees. Remember the basic time rules and format like 24:00 = 00:00 and 12:60 = 13:00.

// Create your own validation that should return "Check your time !" in any case the time is incorrect or the format is wrong , remember this includes passing in negatives times like "-01:-10".

// Examples
// "00:00" --> "360:360"
// "01:01" --> "30:6"
// "00:01" --> "360:6"
// "01:00" --> "30:360"
// "01:30" --> "30:180"
// "24:00" --> "Check your time !"
// "13:60" --> "Check your time !"
// "20:34" --> "240:204"

// My solution

function clockDegree(s) {
  let time = s.split(':');
  let hours = Number(time[0]);
  let minutes = Number(time[1]);
  
  if(isNaN(hours) || isNaN(minutes) ||
    hours < 0 || hours > 23 ||
    minutes < 0 || minutes > 59) 
  return "Check your time !";
 
  let degreeH = hours % 12 * 30;
  let degreeM = minutes * 6;
  if(degreeH === 0) degreeH = 360;
  if(degreeM === 0) degreeM = 360;

  return `${degreeH}:${degreeM}`;
}