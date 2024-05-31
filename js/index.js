var bookmark_Nameinput = document.getElementById("bookmark_Name");
var Website_URLinput = document.getElementById("Website_URL");

var productlist = [];

if (localStorage.getItem("addcontainer") !== null) {
  productlist = JSON.parse(localStorage.getItem("addcontainer"));

  displayData();
}

function add() {
  if (validationName() == true) {
    var supmit = {
      Website_Name: bookmark_Nameinput.value,
      Visit: Website_URLinput.value,
    };
    productlist.push(supmit);

    localStorage.setItem("addcontainer", JSON.stringify(productlist));

    displayData();
    clearform();
    console.log(productlist);
  }
}

function clearform() {
  bookmark_Nameinput.value = null;
  Website_URLinput.value = null;
  bookmark_Nameinput.classList.remove("is-valid");
  Website_URLinput.classList.remove("is-valid");
}

function displayData() {
  var cartona = "";
  for (var i = 0; i < productlist.length; i++) {
    cartona += `  <tr>
    <td>${i + 1}</td>
    <td>${productlist[i].Website_Name}</td>
    <td>
      <button onclick="visiturl()" type="button" class="btn btn-success w-25">Visit</button>
    </td>
    <td>
      <button onclick="deleteitem(${i})" type="button" class="btn btn-danger w-25">Delete</button>
    </td>
  </tr> `;
  }

  document.getElementById("tdata").innerHTML = cartona;
}

function deleteitem(index) {
  productlist.splice(index, 1);
  localStorage.setItem("addcontainer", JSON.stringify(productlist));
  displayData();
}
function visiturl() {
  window.open(Website_URLinput, "_blank", "", "");
}
function validationName() {
  var text = bookmark_Nameinput.value;
  var regex = /^[A-Z][a-z]{2,9}$/;
  if (regex.test(text)) {
    bookmark_Nameinput.classList.add("is-valid");
    bookmark_Nameinput.classList.remove("is-invalid");

    return true;
  } else {

    bookmark_Nameinput.classList.add("is-invalid");
    bookmark_Nameinput.classList.remove("is-valid");

    return false;
  }
}

