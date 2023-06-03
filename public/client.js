class Book {
  constructor(author, title, genre, price) {
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.price = price;
  }
}

document
  .getElementById("register-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const price = parseFloat(document.getElementById("price").value);

    // Validate the price input
    if (isNaN(price)) {
      alert("Please enter a valid price.");
      return;
    }

    const book = { author, title, genre, price };
    const url = "http://localhost:3000/book/";
    const result = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    console.log(await result.json());
    // Clear the form
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("price").value = "";
  });

document
  .getElementById("search-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchQuery = document.getElementById("search").value;

    const url = `http://localhost:3000/book/${searchQuery}`;
    const result = await fetch(url);
    const books = await result.json();

    // Remove the previous results if they exist
    const previousResults = document.getElementById("scroll-container");
    if (previousResults) {
      previousResults.innerHTML = ""; // Clear the results container
    }

    // Remove the search bars text
    document.getElementById("search").value = "";
    // Create a new div to display the search results
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "search-results";

    // Iterate through the books and display the information
    books.forEach((book) => {
      const bookInfo = document.createElement("p");
      bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Price: ${book.price}`;
      resultsDiv.appendChild(bookInfo);
    });

    // Append the results div below the second form
    const scrollContainer = document.getElementById("scroll-container");
    scrollContainer.appendChild(resultsDiv);
  });

// Clear results when the clear button is clicked
document.getElementById("clear-results").addEventListener("click", function () {
  const resultsContainer = document.getElementById("scroll-container");
  resultsContainer.innerHTML = ""; // Clear the results container
});
