// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);

// Make a loop with the <tr>
// Use Object.entries and make a loop with the key and value
// create a variable and loop through with the <td> to input the values

data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var filterTable = d3.select("#filter-btn");

filterTable.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    
    // Select the input element and get the raw HTML node
    var inputDatetime = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    
    if (inputDatetime) {
        var filteredData = tableData.filter(row => row.datetime === inputDatetime);
    }

    if (inputCity) {
        filteredData = tableData.filter(row => row.city === inputCity);
    }

    if (inputState) {
        filteredData = tableData.filter(row => row.state === inputState);
    }

    if (inputCountry) {
        filteredData = tableData.filter(row => row.country === inputCountry);
    }

    if (inputShape) {
        filteredData = tableData.filter(row => row.shape === inputShape);
    }

    tbody.html("")
    filteredData.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });


});
