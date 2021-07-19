// from data.js
var tableData = data;

// YOUR CODE HERE!

//select tbody to show where the data goes
var tbody = d3.select("tbody");

function constructTable(data) {
  //cleans the data
  tbody.html('');
  console.log(data);

  data.forEach(function(ufoSightings) {
  var row = tbody.append("tr");
  Object.values(ufoSightings).forEach(function addRows(value) {
    var cell = row.append("td");
    cell.text(value);
  });
});
};
constructTable(tableData);

var button = d3.select("#filter-btn");

button.on("click", function(){
  d3.event.preventDefault();
  var dateEntry = d3.select("#datetime").property("value");
  //var cityEntry = d3.select("#city").property("value");
  console.log(dateEntry);
  //set filtered data to equal the whole dataset each time 
  filteredData = tableData;
  //needs an if-then statement only filter if that is not blank
  filteredData = filteredData.filter(sighting => sighting.datetime === dateEntry);
  //filteredData = filteredData.filter(location => location.city === cityEntry);
  console.log(filteredData); 
  constructTable(filteredData);
});

//inside the click d3.preventdefault (to use enter as a submit)