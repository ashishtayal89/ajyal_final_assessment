function login() {
  fetch("./users.json")
    .then(response => response.json())
    .then(data => {
      doLogin(data);
    });

  function doLogin(data) {
    var loged = false;
    for (let value of data) {
      if (
        document.getElementById("username").value == value.userName &&
        document.getElementById("password").value == value.password
      ) {
        var user = value.username;
        location.replace("employees.html");
        loged = true;
      }
    }
    if (!loged) {
      alert("Please provide the correct credentials");
    }
  }
}
