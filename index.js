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


app.get('/api/v1/addUsers', function(req, res) { 
    console.log("Add user");
    usersRef.child(user).set({
        password: password,
        score1: 0,
    });
    //res.render('index', {});
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
