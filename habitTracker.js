/***************************************************************************
moPlanner.js
M.Boe, 2018
Javascript file that interacts with moPlanner.html and moPlanner.css to create
a monthly planner.
***************************************************************************/
/***************************************************************************
General Functions
***************************************************************************/

// Int, Int -> Array of Int
//Get a range of numbers [first, last]
function range(first, last){
  var ans = [first];
  while(first != last){
    ans.push[first+1];
    first += 1;
  }
  return ans;
}

/******************************************************************************
Portion that connects to the Vue JS framework
******************************************************************************/
var app = new Vue({
  el: '#app',
  data: {
   dates: [],
   subjects: ["Sleep", "Gym", "Water", "Subject 4", "Subject 5", "Subject 6", "Subject 7"]
  }
});

/*****************************************************************************
Editing the Vue JS content
*****************************************************************************/
//Fill in the dates array
var noDays = 31; //Number of Days in the month
var i = 1;
while (i <= noDays) {
  app.dates.push({ text : i.toString()});
  i += 1;
}
