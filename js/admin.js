var errordiv = document.getElementById("errordiv");
var errorspan = document.getElementById("errorspan");
var errortitle = document.getElementById("errortitle");
var errordetails = document.getElementById("errordetails");
var loginform = document.getElementById("loginform");
function validateUser(){
  console.log("validateUser");
  var enteredUsername = document.getElementById("username").value;
  var username = localStorage.getItem("username");
  var enteredPassword = document.getElementById("password").value;
  var password = localStorage.getItem("password");
  if (enteredUsername == username && enteredPassword == password) {
    console.log("validated");
    localStorage.setItem("validated", "yes");
    window.location = "index.html";
  } else {
    console.log("incorrect");
    localStorage.setItem("validated", "no");
    loginform.reset();
    errordiv.style.display = 'block';
    errordiv.className = errordiv.className.replace("w3-blue", "w3-red");
    errorspan.className = errorspan.className.replace("w3-blue", "w3-red");
    errortitle.innerHTML = "Incorrect credentials!"
    errordetails.innerHTML = "Please enter correct credentials and try again."
  }
}


  function logout(){
  localStorage.removeItem("validated");
  window.location = "index.html";
}