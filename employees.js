var employeeData;
var promise = fetch("./employees.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    employeeData = data;
    createTables(sortId());
  });
function createTables(records) {
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("container").appendChild(table);
}
function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}
function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}
function sortId() {
  document.getElementById("container").innerHTML = "";
  var employeeDataId = [...employeeData];
  createTables(
    employeeDataId.sort(function(a, b) {
      return a.id - b.id;
    })
  );
}
function sortSalary() {
  document.getElementById("container").innerHTML = "";
  var employeeDataSalary = [...employeeData];
  createTables(
    employeeDataSalary.sort((a, b) =>
      a.employee_salary > b.employee_salary
        ? 1
        : b.employee_salary > a.employee_salary
        ? -1
        : 0
    )
  );
}
function sortAge() {
  document.getElementById("container").innerHTML = "";
  var employeeDataAge = [...employeeData];
  createTables(
    employeeDataAge.sort(function(a, b) {
      return a.employee_age.localeCompare(b.employee_age);
    })
  );
}
