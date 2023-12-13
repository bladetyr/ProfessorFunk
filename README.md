# Professor Funk
## A browser rhythym game based on the UDCIS community.

Giant WIP! Come back later for a better README!

In order to run this website using a firebase realtime database, we have
implemented node.js and rest API methods. First, on the page loading we
use a GET method to get the list of all users, which is used for the leaderboard
and sign in authentification. We also use a POST method whenever a new
user is created in order to push that new user to the database, as well
as when they get a new high score.