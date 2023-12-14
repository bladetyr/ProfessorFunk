//userData stores the json data that contains all of the users on firebase
//loggedin stores a boolean value of if a user is logged in or not
//userNow stores a string representing the email of the current user
$( document ).ready(function() {

  //Updates the locally stored collection of users
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
  console.log("Ready!");


  //When the signup button is pressed the current user is updated, a new user is added, and the
  //locally stored list of users is updated
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


  //When the signup button is clicked, it tests to see if the credentials are correct, and if they are
  //the current user is updated
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

  //When the finish button is clicked the high score for the current user is updated
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

