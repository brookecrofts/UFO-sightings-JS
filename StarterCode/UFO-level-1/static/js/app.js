// Steps below: Activity 14-3-3 Use d3 to update each cell's text with dates etc.
// from data.js
var tableData = data;

// YOUR CODE HERE! define tbody as a variable
var tbody = d3.select("tbody");

// Console.log the alien data from data.js
console.log(data);

//Must buildtable first  - Activity 14-3-3 + bonus steps for reference
// Step 1: Loop Through `data` and console.log each alien report object
// Step 2:  Use d3 to append one table row `tr` for each alien report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
// Step 3:  Use `Object.entries` to console.log each alien report value
// Step 4: Use d3 to append 1 cell per alien report value (date,city,st,country, shape, duration)
function buildtable(data) {
    data.forEach((alienSighting) => {
    // console.log(alienSighting);
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(([key, value]) => {
    // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
};
buildtable(data)

//Activity 14-3-5, make button a variable
var button = d3.select("#filter-btn");

//Activities 14-3-8 and 9 to handle click and filter
button.on("click", function eventHandler(sighting) {
    tbody.html('');
    var inDate = d3.select("#datetime").property('value');
    console.log(inDate);
    console.log(d3.event.target);
    var filteredSightings = data.filter((row)=>row.datetime==inDate);
    console.log(filteredSightings);
    buildtable(filteredSightings);
});


//Create a fiter fx for clicking button
function pickaDate (sighting) {
    return sighting.datetime==inDate;
}