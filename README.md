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
- You may deploy however you wish, but we installed the node http-server. Run this command in your terminal: 'npm i http-server -g'
- If using the method above, deploy by typing 'http-server' into the terminal.

- * The prefered method is by running node ..\index.js

<a href="https://drive.google.com/file/d/1zZzjrMhaQImmhy6JgRUY5S5u-RUiQOKQ/view?usp=drive_link" target="_blank">Here is a video tutorial!</a>

## API Documentation

In order to run this website using a firebase realtime database, we have
implemented node.js and rest API methods. First, on the page loading we
use a GET method to get the list of all users, which is used for the leaderboard
and sign in authentification. We also use a POST method whenever a new
user is created in order to push that new user to the database, as well
as when they get a new high score.