/***************************************************************************
weekplGrid.js
M.Boe, 2020
Javascript file that interacts with weekplGrid.html to create
a weekly planner.
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
    days: [
      { text: 'Sunday' },
      { text: 'Monday' },
      { text: 'Tuesday' },
      { text: 'Wednesday' },
      { text: 'Thursday' },
      { text: 'Friday' },
      { text: 'Saturday' }
    ],

   hours: [],
  }
});

/*****************************************************************************
Editing the Vue JS content
*****************************************************************************/
var ind = 0;
for (suffix of ["AM", "PM"]) {
  app.hours.push({ text : "12 "+ suffix, index: ind++ });
  var i = 1;
  while (i <= 11){
    app.hours.push({ text : i + " " + suffix, index: ind++ });
    i += 1;
  }
}
