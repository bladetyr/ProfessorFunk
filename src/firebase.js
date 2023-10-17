// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

async function getPlayers(db) {
    const playersCol = collection(db, 'usernames');
    const playerSnapshot = await getDocs(playersCol);
    const playerList = playerSnapshot.docs.map(doc => doc.data());
    return playerList;
  }