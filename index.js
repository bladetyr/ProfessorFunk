/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const express = require("express"); 
const fs = require("fs"); 
const path = require('path'); 
const app = express(); 
const port = 8080; 
 

//const {onRequest} = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");

const admin = require("firebase-admin");

const serviceAccount = require("./functions/servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://professor-funk-game-default-rtdb.firebaseio.com"
});

const { getDatabase } = require('firebase-admin/database');
const db = getDatabase();
const ref = db.ref('server/saving-data/');
const usersRef = ref.child('users');

/*
window.onload = function getDatabaseElements() { 
  const usersRef = db.collection('players');
  const snapshot = usersRef.get();
  for (i=0;i<snapshot.length;i++)
  {
      document.write('<div>' + snapshot[i].getKey() + '</div>');
      document.write('<div>' + snapshot[i].score1 + '</div>');
  }
  
}
*/

let users = {};
app.get('/api/v1/listUsers', function(req, res) {
  usersRef.once('value')
    .then(snapshot => {
      users = snapshot.val();
      console.log(users);
      res.json(users); // Send the JSON data as the response
    })
    .catch(error => {
      console.error('Error fetching data from Firebase:', error);
      res.status(500).send('Internal Server Error');
    });
});

app.post('/api/v1/addUser', function(req, res) { 
    const newpassword = req.query.password;
    const newemail = req.query.user;
    console.log("Add user");
    usersRef.child(newemail).set({
        password: newpassword,
        score1: 0
    });
    console.log("Successfully added user");
    res.end();
});

app.use( function ( req, res, next ) { 
 const { url, path: routePath } = req ; 
 console.log( 'Request: Timestamp:', new Date().toLocaleString(), ', URL (' + url + '), PATH (' + routePath + ').' ) ; 
 next(); 
}); 
app.use('/', express.static(path.join(__dirname, ''))) 
app.listen(port, () => { 
 console.log(`Server running on port ${port}...`) 
});
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
