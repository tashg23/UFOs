// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
//D3 is javascript library that produces sophisticated
//and dynamic graphs in HTML webpage 
var tbody = d3.select('tbody');

function buildTable(data) {
    // First clear out any existing data
    tbody.html("");

    // Loop through each object in the data and append a row and cells for each value in the row 
    data.forEach((dataRow) => {
    // Using let instead of var since the row variable is limited to this block of code 
    // Telling JS to find <tbody> tag within the HTML and add a table row 'tr'
        let row = tbody.append('tr');
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        }
        );
    });
}

// Creating date filter 
function handleClick() {
    // Look for #datetime ID in the HTML tags
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    if (date) {
        // Show only the rows where the date is equal to the date filter 
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    buildTable(filteredData);
};

// We will assign a unique ID to a button element in the HTML called 'filter-btn'
// Also telling d3 to execute handleClick function when the button with an id of 'filter-btn' is clicked 
d3.selectAll('#filter-btn').on('click', handleClick);

// Build table when page loads
buildTable(tableData);