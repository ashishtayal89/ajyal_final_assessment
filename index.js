var usersData;
var promise = fetch("./users.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    usersData = data;
  });
function doLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (value of usersData) {
    if (value.userName == username && value.password == password) {
      window.open("employees.html");
    }
  }
  document.getElementById("fail").innerHTML =
    "Please provide the correct credentials";
}
