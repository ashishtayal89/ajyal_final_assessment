var usersData;
var promise = fetch("/users.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    usersData = data;
  });

function validateLogin() {
  var username = document.getElementById("userid").value;
  var password = document.getElementById("pswrd").value;
  console.log(username);
  console.log(password);
  for (value of usersData) {
    if (value.username == username && value.password == password) {
      location.replace("employees.html");
      break;
    } else {
      document.getElementById("displayMessage").innerHTML =
        "Please provide the correct credentials ";
    }
  }
}
