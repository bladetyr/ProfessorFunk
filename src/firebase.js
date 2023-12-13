//userData stores the json data that contains all of the users on firebase
//loggedin stores a boolean value of if a user is logged in or not
//userNow stores a string representing the email of the current user
$( document ).ready(function() {
  let userData = {};
  let loggedin = false;
  let userNow = "";
    $.ajax({
    url: '/api/v1/listUsers',
    type: 'GET',
    dataType: "json",
    success: function(result) {
      userData = result;
      console.log("Data retrieved!");
      console.log(userData);
    }
    });
  //let signupbtn = document.getElementById("signupbtn");
  //signupbtn.addEventListener("click", newplayerdata());
  console.log("Ready!");
  $('#signupbtn').click(function(){ 
    $.ajax({ 
        url: "/api/v1/addUser?user="+document.getElementById("newemail").value.replace(".","_") 
        + "&password=" + document.getElementById("newpassword").value,
        type: 'POST', 
        dataType: "json",
        success: function(result) { 
          console.log("Add Returned");
        } 
    });
    loggedin = true;
    userNow = document.getElementById("newemail").value;
    console.log(document.getElementById("newemail").value);
    document.getElementById("topright").innerHTML = userNow;
    $.ajax({
      url: '/api/v1/listUsers',
      type: 'GET',
      dataType: "json",
      success: function(result) {
        userData = result;
        console.log("Data retrieved!");
        console.log(userData);
      }
    });
    //insert function to change user signed in
  })
  $('#signinbtn').click(function(event){ 
    event.preventDefault();
    console.log("Signup button clicked");
    if (userData.hasOwnProperty(document.getElementById("uname").value.replace(".","_"))){
      if (userData[document.getElementById("uname").value.replace(".","_")].password == document.getElementById("password").value){
        loggedin = true;
        userNow = document.getElementById("uname").value.replace("_",".");
        console.log(userNow);
        document.getElementById("topright").innerHTML = userNow;
        document.getElementById('id01').style.display='none'
        alert("Successfully Signed In!");
      }
      else{
        alert("Incorrect Credentials");
      }
    }
    else {
      alert("Incorrect Credentials");
    }
  })
})
  

function newplayerdata(){
  var email = document.getElementById("newemail").innerHTML;
  var password = document.getElementById("newpassword").innerHTML;
  event.preventDefault();
  console.log(email);
}
