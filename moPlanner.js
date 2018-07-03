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
    days: [
      { text: 'Sunday' },
      { text: 'Monday' },
      { text: 'Tuesday' },
      { text: 'Wednesday' },
      { text: 'Thursday' },
      { text: 'Friday' },
      { text: 'Saturday' }
    ],

   dates: [
    ],

   months: [
      { text: 'January' },
      { text: 'February' },
      { text: 'March' },
      { text: 'April' },
      { text: 'May' },
      { text: 'June' },
      { text: 'July' },
      { text: 'August' },
      { text: 'September' },
      { text: 'October' },
      { text: 'November' },
      { text: 'December' }
    ]
  }
});

/*****************************************************************************
Editing the Vue JS content
*****************************************************************************/
var noDays = 31;
var i = 1;
while (i <= noDays){
  app.dates.push({ text : i.toString()});
  i += 1;
}
