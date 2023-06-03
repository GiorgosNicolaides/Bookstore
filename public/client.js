const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
});

showSlide();
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

    // Check if the book title already exists in the database
    const checkUrl = `http://localhost:3000/book/${encodeURIComponent(title)}`;
    const checkResult = await fetch(checkUrl);
    const existingBooks = await checkResult.json();

    if (existingBooks.length > 0) {
      alert("Book already exists in the database.");
      return;
    }

    // Add the book to the database
    const result = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    const response = await result.json();
    if (result.status === 200) {
      alert(response.message);
    } else {
      alert("Failed to add the book.");
    }

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

    // Remove the search bar's text
    document.getElementById("search").value = "";
    // Create a new div to display the search results
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "search-results";

    if (books.length === 0) {
      const noResultsInfo = document.createElement("p");
      noResultsInfo.textContent = "Book does not exist";
      resultsDiv.appendChild(noResultsInfo);
    } else {
      // Iterate through the books and display the information
      books.forEach((book) => {
        const bookInfo = document.createElement("p");
        bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Price: ${book.price}`;
        resultsDiv.appendChild(bookInfo);
      });
    }

    // Append the results div below the second form
    const scrollContainer = document.getElementById("scroll-container");
    scrollContainer.appendChild(resultsDiv);
  });

// Clear results when the clear button is clicked
document.getElementById("clear-results").addEventListener("click", function () {
  const resultsContainer = document.getElementById("scroll-container");
  resultsContainer.innerHTML = ""; // Clear the results container
});
