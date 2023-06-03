class Book {
  constructor(author, title, genre, price) {
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.price = price;
  }
}

document.getElementById("register").addEventListener("click", async function (e) {
  e.preventDefault();
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const price = document.getElementById("price").value;

  const book = new Book(author, title, genre, price);
  const url = "http://localhost:3000/book/";
  const result =await fetch(url, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(book)
  });
  console.log(result.json());
});
