const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(array) {
    for(const newRecord of array) {
        if(newRecord.result === "W")
            return newRecord.year;
    }
}
superbowlWin(record);

//use find() to test each object and see if the result is "w" 
// maybe use for...of? or a whole bunch of if statements
// lets try using the for...of loop first