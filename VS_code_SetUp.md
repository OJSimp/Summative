daily set up: 
1. Clone the repo
2. ///// MOVE TO A BRANCH \\\\\\\
  1. Type: git branch - To check which branch you are on
  2: Type: git checkout branch-name - To switch to the branch you are working on so you do not update the main
  3. Type: git pull origin main - To pull the most recent copy into your branch (if it already exists).
THEN...
3. Create a .env file in the server directory and add the following: DB_STRING=<mongo_uri>
PORT=8001
3. Run npm install in the server directory
4. Run npx nodemon server.js in the server directory to start the server
5. Run npm install in the front directory
6. Run npm start in the front directory to start the client

Happy coding!

