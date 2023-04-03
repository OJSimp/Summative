daily set up:

1. Clone the repo
2. ///// MOVE TO A BRANCH \\\\\\\
3. Type: git branch - To check which branch you are on
   2: Type: git checkout branch-name - To switch to the branch you are working on so you do not update the main
4. Type: git pull origin main - To pull the most recent copy into your branch (if it already exists).
   THEN...
5. Create a .env file in the server directory and add the following: DB_STRING=<mongo_uri>
   PORT=8001
6. Run npm install in the server directory
7. Run npx nodemon server.js in the server directory to start the server
8. Run npm install in the front directory
9. Run npm start in the front directory to start the client

Happy coding! Hello
