// // import the data from the js
const teleData = data;

// // Reference the HTML Table using d3
var tbody = d3.select("tbody");

// // Simple JavaScript console.log statement 
// function printHello() {
//     console.log("Hello There!");
// }

// // Takes two numbers and adds them 
// function addition(a, b) {
//     return a + b;
// }

// // funtions can call other functions 
// function doubleAddition(c, d) {
//     var total = addition(c,d) * 2;
//     return total;
// }

// function doubleAddition(65,34) {
//     var total (65, 34) *2;
//     return total;
// }

// // Converted to an arrow function
// addition = (a, b) => a + b;

// doubleAddition = (c, d) => addition(c, d) * 2;

// // create a for loop

// function listLoop(userList) {
//     for (var i = 0; i < userList.length; i++) {
//       console.log(userList[i]);
//     }
//  }

//  // Python for loop ex
//  // for i in user_list: print (i)

//  // loop to iterate through an array of veggies
//  let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

//  // for loop
//  for (var i = 0; i < vegetables.length; i++) {
// }

// var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// // loop up to the amount of veggies listed in the array 
// for (var i = 0; i < vegetables.length; i++) {
//     console.log("I love " + vegetables[i]);
// }
// // loop up to the fifth value 
// for (var i = 0; i < 5; i++) {
//     console.log("I am " + i);
//  }


 // creating a new line and function and starting to build our table //
 // tbody.html(""); CLEARS ALL THE DATA
 
 function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(teleData);



