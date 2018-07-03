/***************************************************************************
planner.js
M.Boe, 2018
Javascript file that interacts with planner.html and planner.css to create
a monthly planner.
***************************************************************************/

/**************************************************************************
General Objects
**************************************************************************/

//Year(Year number, starting weekday)
function Year(num, sWeekday){

}

//Month(Name of the month, Starting weekday)
function Month(name, sWeekday){

}

//Date(Date number, Day of Week name)
function Date(num, weekday){

}

//Day


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
      /*{ text: '1' },
      { text: '2' },
      { text: '3' },
      { text: '4' }*/
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
var x = 5;
var daysInM = range(1,31)
app.dates.push({ text : x.toString()});

//Loads the dates data section
//for x in range(1,31){
//  app.dates.push({ text : x.toString()});
//}
