//userData stores the json data that contains all of the users on firebase
//loggedin stores a boolean value of if a user is logged in or not
//userNow stores a string representing the email of the current user
$( document ).ready(function() {
  document.getElementById("topright").innerHTML = localStorage.getItem('userNow');
    $.ajax({
    url: '/api/v1/listUsers',
    type: 'GET',
    dataType: "json",
    success: function(result) {
      localStorage.setItem('userData', JSON.stringify(result));
      console.log("Data retrieved!");
      console.log(result);
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
    localStorage.setItem('loggedin', true);
    localStorage.setItem('userNow', document.getElementById("newemail").value);
    console.log(document.getElementById("newemail").value);
    document.getElementById("topright").innerHTML = localStorage.getItem('userNow');
    $.ajax({
      url: '/api/v1/listUsers',
      type: 'GET',
      dataType: "json",
      success: function(result) {
        localStorage.setItem('userData', JSON.stringify(result));
        console.log("Data retrieved!");
        console.log(result);
      }
    });
  })

  $('#signinbtn').click(function(event){ 
    event.preventDefault();
    console.log("Signup button clicked");
    if (JSON.parse(localStorage.getItem('userData')).hasOwnProperty(document.getElementById("uname").value.replace(".","_"))){
      if (JSON.parse(localStorage.getItem('userData'))[document.getElementById("uname").value.replace(".","_")].password == document.getElementById("password").value){
        localStorage.setItem('loggedin', true);
        localStorage.setItem('userNow', document.getElementById("uname").value.replace("_","."));
        console.log(localStorage.getItem('userNow'));
        document.getElementById("topright").innerHTML = localStorage.getItem('userNow');
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

  $('#finishbtn').click(function(event){ 
    $.ajax({ 
      url: "/api/v1/updateUser?user="+localStorage.getItem('userNow') 
      + "&score1=" + document.getElementById("scoredisplay").value,
      type: 'POST', 
      dataType: "json",
      success: function(result) { 
        console.log("Update Returned");
      } 
    });
    event.preventDefault();
    console.log("Finish button clicked")
  })
})
  

function newplayerdata(){
  var email = document.getElementById("newemail").innerHTML;
  var password = document.getElementById("newpassword").innerHTML;
  event.preventDefault();
  console.log(email);
}
