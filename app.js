
/// Question-2
SELECT
  customers.customerId AS customerid,
  customers.name AS name,
  subjects.subjectName AS subjects
FROM
  customers
  JOIN subjects
  JOIN subjectstudentmapping
GROUP BY
  subjects
ORDER BY
  subjects.subjectName ASC

///Question-3

const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "detailsDatabase.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

app.post("/details/", async (request, response) => {
  const { email, name } = request.body;
  const postQuery = `
  INSERT INTO
    details (email,name)
  VALUES
    (${email}, ${name});`;
  await database.run(postQuery);
  response.send("District Successfully Added");
});

module.exports = app;

///Question-4

const person = new Object();
person.id = 2;
person.gender = "male";

const student = new Object();
student.name = "ravi";
student.email = "ravi11@yopmail.com";

export app.js

///Question-6

function compare(arrays){
for(let i=0;i<101;i++){
    if (arrays.find(i)){
        return true;
    }
    else{
        return false;
    }
}


}
arrays=[for(let i=0;i<100;i++)]

sort(arrays)

compare(arrays)

export module=app;
