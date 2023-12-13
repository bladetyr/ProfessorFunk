
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
  $('#signinbtn').click(function(){
    loggedin = true;
    userNow = document.getElementById("uname").value.replace("_",".");
    console.log(userNow);
    document.getElementById("topright").innerHTML = userNow;
  })
})

function newplayerdata(){
  var email = document.getElementById("newemail").innerHTML;
  var password = document.getElementById("newpassword").innerHTML;
  event.preventDefault();
  console.log(email);
}
/*
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").innerHTML;
  var password = document.getElementById("password").innerHTML;
  console.log(email);
  usersRef.child(email).set({
    password: password,
    score1: 0,
    score2: 0,
    score3: 0,
    score4: 0
  });
});
*/
/*
usersRef.set({
alanisawesome: {
date_of_birth: 'June 23, 1912',
full_name: 'Alan Turing'
},
gracehop: {
date_of_birth: 'December 9, 1906',
full_name: 'Grace Hopper'
}
});



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var userObj = {
    "username" : $(this).parent().find('.username').text(),
    "password" : $(this).parent().find('.password').text(),
    "score-1" : $(this).parent().find('.score-1').text(),
    "password" : $(this).parent().find('.password').text()
};

$(document).on('click', function() {
    firebase.database().ref('/userObj').push(userObj); //push the object to database
});

*/
/*
const cityRef = db.collection('cities').doc('SF');
const doc = await cityRef.get();

// Write data to database
function writePlayerData(userId, name, email, score1) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      high_score1 : score1
    });
  }

  var user = firebase.auth().currentUser;
  var uid;
  
  if (user) {
    uid = user.uid;
    console.log('User UID:', uid);
  }

// I think this could be useful for retrieving data from the database
/*
async function getPlayers(db) {
    const playersCol = collection(db, 'usernames');
    const playerSnapshot = await getDocs(playersCol);
    const playerList = playerSnapshot.docs.map(doc => doc.data());
    return playerList;
  }
*/
  