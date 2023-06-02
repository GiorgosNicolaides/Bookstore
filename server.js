const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bookstore.db");
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

app.get("/book/:title", async (req, res) => {
  const q = `SELECT * FROM books WHERE title LIKE '%${req.params.title}%'`;

  try {
    const results = await query(q);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.append('status', '500');
    res.send(err);
  }
});



function query(q) {
  return new Promise(function(resolve, reject) {
    db.all(q, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});