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
  const title = req.params.title;
  const title1 = title.substring(1); // Removes the first character
  const q = 'SELECT * FROM books WHERE title LIKE ?';
  const params = [`%${title1}%`];

  try {
    const results = await query(q, params);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.append('status', '500');
    res.send(err);
  }
});


app.post('/book/', async (req, res) => {
  const { author, title, genre, price } = req.body;

  const q = `INSERT INTO books (author, title, genre, price) VALUES (?, ?, ?, ?)`;
  const params = [author, title, genre, price];

  try {
    await query(q, params);
    res.json({ message: 'Book added successfully' });
  } catch (err) {
    console.error(err);
    res.append('status', '500');
    res.send(err);
  }
});


function query(q, params = []) {
  return new Promise(function(resolve, reject) {
    db.all(q, params, (err, rows) => {
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