var employeeData;
var promise = fetch("./employees.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    employeeData = data;
    createTables(sortById());
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
function sortById() {
  document.getElementById("container").innerHTML = "";
  var employeeDataIdCopy = [...employeeData];
  createTables(
    employeeDataIdCopy.sort(function(a, b) {
      return a.id - b.id;
    })
  );
}

function sortBySalary() {
  document.getElementById("container").innerHTML = "";
  var employeeDataSalaryCopy = [...employeeData];
  createTables(
    employeeDataSalaryCopy.sort((a, b) =>
      a.employee_salary > b.employee_salary
        ? 1
        : b.employee_salary > a.employee_salary
        ? -1
        : 0
    )
  );
}

function sortByAge() {
  document.getElementById("container").innerHTML = "";
  var employeeDataAgeCopy = [...employeeData];
  createTables(
    employeeDataAgeCopy.sort(function(a, b) {
      return a.employee_age.localeCompare(b.employee_age);
    })
  );
}
