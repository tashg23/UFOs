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