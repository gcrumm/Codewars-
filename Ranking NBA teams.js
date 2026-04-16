// Description:
// You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:

// r = Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,  Los Angeles Clippers 100 Boston Celtics 120.

// A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...

// Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...)  will return as a string

// the name of the team followed by : and
// the number of matches won by the team
// the number of draws
// the number of matches lost by the team
// the total number of points scored by the team
// the total number of points conceded by the team
// and finally a kind of marks in our ranking system

// a team marks 3 if it is a win
// a team marks 1 if it is a draw
// a team marks 0 if it is a loss.
// The return format is:

// "Team Name:W=nb of wins;D=nb of draws;L=nb of losses;Scored=nb;Conceded=nb;Points=nb"
// Remarks:
// The team name "" returns "".

// If a team name can't be found in the given string of results you will return "Team Name:This team didn't play!" (See examples below).

// The scores must be integers. If a score is a float number (abc.xyz...) you will return: "Error(float number):the concerned string"

// Examples:
// nba_cup(r, "Los Angeles Clippers") -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"

// nba_cup(r, "Boston Celtics") -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

// nba_cup(r, "") -> ""

// nba_cup(r, "Boston Celt") -> "Boston Celt:This team didn't play!"

// r0="New York Knicks 101.12 Atlanta Hawks 112"
// nba_cup(r0, "Atlanta Hawks") -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"

// My solution

function nbaCup(r, toFind) {
  if (toFind === "") return "";
  
  let games = r.split(",");
  let wins = 0, draws = 0, losses = 0;
  let scored = 0, conceded = 0;
  let found = false;
  
  for (let game of games) {
    let trimGame = game.trim();
    if (trimGame.includes(".")) {
      return `Error(float number):${trimGame}`;
    }
    
    let parts = trimGame.split(" ");
    let nums = [];
    let numIndexes = [];
    
    for (let i = 0; i < parts.length; i++) {
      if (!isNaN(parts[i])) {
        nums.push(Number(parts[i]));
        numIndexes.push(i);
      }
    }
    let team1 = parts.slice(0, numIndexes[0]).join(" ");
    let team2 = parts.slice(numIndexes[0] + 1, numIndexes[1]).join(" ");
    let score1 = nums[0];
    let score2 = nums[1];
    if (team1 !== toFind && team2 !== toFind) continue;

    found = true;
    if (team1 === toFind) {
      scored += score1;
      conceded += score2;

      if (score1 > score2) wins++;
      else if (score1 < score2) losses++;
      else draws++;
    } else {
      scored += score2;
      conceded += score1;

      if (score2 > score1) wins++;
      else if (score2 < score1) losses++;
      else draws++;
    }
  }

  if (!found) {
    return `${toFind}:This team didn't play!`;
  }

 
  let points = wins * 3 + draws;

  return `${toFind}:W=${wins};D=${draws};L=${losses};Scored=${scored};Conceded=${conceded};Points=${points}`;
}