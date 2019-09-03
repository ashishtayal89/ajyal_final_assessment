var usersData;
var promise = fetch("./users-list.json");
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
  for (value of usersData) {
    if (value.username == username && value.password == password) {
      localStorage.setItem("username", username);
      if (
        localStorage.getItem(username) == null ||
        localStorage.getItem(username) == "NaN"
      ) {
        localStorage.setItem(username, 0);
      } else {
        localStorage.setItem(username, localStorage.getItem(username));
      }
      location.replace("main.html");
    }
  }
}
