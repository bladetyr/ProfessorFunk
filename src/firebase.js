// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhxiY6nzTMeQP-z-4lRyEzmtYzKyF6NmE",
  authDomain: "professor-funk-game.firebaseapp.com",
  projectId: "professor-funk-game",
  storageBucket: "professor-funk-game.appspot.com",
  messagingSenderId: "471546053599",
  appId: "1:471546053599:web:621334d0e9b40bab997a6a",
  measurementId: "G-Q8FND4G82T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

var myObj = {
    "username" : $(this).parent().find('.username').text(),
    "password" : $(this).parent().find('.password').text(),
    "score-1" : $(this).parent().find('.score-1').text(),
    "password" : $(this).parent().find('.password').text()
};

$(document).on('click','.fa-star-o', function() {
    $(this).removeClass('fa-star-o').addClass('fa-star');
    favorites.push(myObj); //push the object to your array
});

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
  