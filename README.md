# Professor Funk -- A browser rhythym game based on the UDCIS community.
## Features
- 2 fully completed songs created by UD CIS community members.
- Typical _Dance Dance Revolution_ mechanics in a silly, browser-based format.
- Usernames and passwords to protect your scores.
- Leaderboard to display the top performers.
- Typical WASD input for arrows.

## Local Deployment
Firstly, fork this repo and save it wherever you'd like. After pulling it to your IDE of choice, all you have to do is...
- Remove every instance of '/ProfessorFunk'. Since this project is deployed in Blade's GitHub pages URL, the extra '/ProfessorFunk' was needed for online deployment. It is not needed for local deployment. This can easily be done in Visual Studio Code by using Ctrl + Shift + F and replacing all with nothing.

- First run 'npm install'
- Then when that is done run 'node ..\ProfessorFunk\index.js'
- Then simply go to http://localhost:8080

<a href="https://drive.google.com/file/d/1aLuRimMcWP_KMXzPxCLNQIPtRWAyxOk_/view?usp=sharing" target="_blank">Here is a video tutorial!</a>

## API Documentation

In order to run this website using a firebase realtime database, we have
implemented node.js and rest API methods. 

First, in firebase.js, once the page loads we use a GET function to get the list 
of all users, which is used for the leaderboard
and sign in authentification. We also use a POST function whenever a new
user is created in order to push that new user to the database, as well
as when they get a new high score.

In index.js, we use the post method to publish a new player node to the database,
we use the get method to get all of the data from the database, and we
use a put method to update the score values in the database.

In order to use each of the statements mentioned above, you need to provide them with certain perameters:
- Post needs an email (user) and a password (password) and returns nothing
- Get needs no paramters and returns a JSON object
- Put needs an email (user) and a score value (score1) and returns nothing
