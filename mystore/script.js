// Fetch data from the jason file products.json
var prodData;
var promise = fetch("./products.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    prodData = data;
    createProducts(data);
  });

// Filter products based on the search term I entered
function filterdProducts() {
  var search_input = document.getElementById("searchTerm").value;
  document.getElementById("flex-item-middle-panel").innerHTML = "";
  createProducts(
    prodData.filter(value => {
      var lowerCaseProduct = value.description.toLocaleLowerCase();
      return lowerCaseProduct.includes(search_input);
    })
  );
}
// Create products depends on the user I logged in as.
function createProducts(test) {
  document.getElementById("userID").value = localStorage.getItem("username");
  document.getElementById("userID").innerHTML = localStorage.getItem(
    "username"
  );
  document.getElementById("cart-counter").value = localStorage.getItem(
    document.getElementById("userID").value
  );
  document.getElementById("cart-counter").innerHTML = localStorage.getItem(
    document.getElementById("userID").value
  );
  // we will get the id of the middle panel here
  var middlePanel = document.getElementById("flex-item-middle-panel");
  for (let obj of test) {
    // div gallery has img tag only
    var gallery = document.createElement("div");
    gallery.className = "gallery";

    //create tag img and assign each URL to it
    var img = document.createElement("img");
    img.src = obj.imageURL;
    // append this img to the parent div gallery
    gallery.appendChild(img);

    //div description has description only
    var description = document.createElement("div");
    description.className = "desc";
    description.innerHTML = getDescription(obj);
    gallery.appendChild(description);
    //Create button + assign onClick event
    var button = document.createElement("button");
    //assign class + id name;
    button.className = "buttonstyle";
    button.id = "AddButton";
    //assign onclick
    button.onclick = incrementCartAmount;
    //assign button value
    button.innerHTML = "Add To Cart";
    //assign width
    button.style.width = "100%";

    gallery.appendChild(button);

    //Adding this div to the container (middlepanel)
    middlePanel.appendChild(gallery);
  }
}
// get description
function getDescription(element) {
  return (
    "<strong>Name: </strong>" +
    element.name +
    "<br>" +
    " <strong>Color:</strong> " +
    element.color +
    "<br>" +
    " <strong>Price:</strong> " +
    element.price +
    "<br>" +
    " <strong>Description:</strong> " +
    element.description +
    "<br>"
  );
}
// Increment Cart Amount
function incrementCartAmount() {
  var currentUser = document.getElementById("userID").value;
  var currentCount = document.getElementById("cart-counter");
  var currentCountParsed = parseInt(currentCount.textContent);
  var NewCount = counter(currentCountParsed);
  currentCount.innerHTML = NewCount;
  localStorage.setItem(currentUser, NewCount);
}
// Counter function used by Increment Cart Amount Function
function counter(counter) {
  return counter + 1;
}
// Logout functions takes you back to the loginpage
function logout() {
  alert("You will be logged out now..");
  location.replace("logout-page.html");
}
function loginPage() {
  location.replace("login-page.html");
}
function suggestionsPage() {
  location.replace("feedback-page.html");
}
function productsPage() {
  location.replace("main.html");
}
function postbtn() {
  alert("Feedback posted succesfully, you will be contacted soon!");
}
// When the user clicks on div, open the popup
function popupFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
