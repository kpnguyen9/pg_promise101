const config = {
    host: 'localhost',
    port: 5432,
    database: 'likeypixdb',
    user: 'postgres'
 };

const pgp = require('pg-promise')();
const db = pgp(config);

db.query("SELECT * FROM posts WHERE url='day-at-the-beach.jpg'")
  .then((results)=>{
      results.forEach((row)=>{
          console.log(row);
          console.log(row.id, row.url);
      })
  })
  .catch((e)=>{
      console.error(e);
  });

//below is the same query using "one" where it selects one specific row of data and console logs it; when you only extract one row, there is no need to do a forEach method because "one" does it for you, also there is only 1 element/row that is returned to the results in the next line

// db.one("SELECT * FROM posts WHERE url='day-at-the-beach.jpg'")
//   .then((results)=>{
//         console.log(results);
//         console.log(results.id, results.url);
//     })
// .catch((e)=>{
//     console.error(e);
// });

db.result("INSERT INTO users VALUES (default, 'Sebastian', 'abc@yahoo.com')")
  .then((result)=>{
      console.log(result);
  })
  .catch((e)=>{
      console.log(e)
  })



const newUser = {name: "Andy", email: "andy@gmail.com" }
const sql = "INSERT INTO users (name, email) VALUES (${name},${email})";

db.result(sql, newUser)
  .then((result)=>{
      console.log(result)
  })
  .catch((e)=>{
    console.log(e)
})

pgp.end();