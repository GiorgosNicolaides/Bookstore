CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author VARCHAR(25) NOT NULL,
  title VARCHAR(40) NOT NULL,
  genre VARCHAR(20) NOT NULL,
  price REAL NOT NULL
);
INSERT INTO books (author, title, genre, price) VALUES
('J.K. Rowling', 'Harry Potter and the Sorcerer''s Stone', 'Fantasy', 9.99),
('Harper Lee', 'To Kill a Mockingbird', 'Drama', 8.99),
('George Orwell', '1984', 'Science Fiction', 7.99),
('Jane Austen', 'Pride and Prejudice', 'Romance', 6.99),
('J.R.R. Tolkien', 'The Lord of the Rings', 'Fantasy', 14.99),
('F. Scott Fitzgerald', 'The Great Gatsby', 'Satire', 9.99),
('Markus Zusak', 'The Book Thief', 'Drama', 10.99),
('Agatha Christie', 'Murder on the Orient Express', 'Mystery', 8.99),
('Ernest Hemingway', 'The Old Man and the Sea', 'Drama', 7.99),
('Dan Brown', 'The Da Vinci Code', 'Mystery', 11.99),
('Suzanne Collins', 'The Hunger Games', 'Action and Adventure', 9.99),
('J.D. Salinger', 'The Catcher in the Rye', 'Drama', 8.99),
('Gabriel García Márquez', 'One Hundred Years of Solitude', 'Satire', 12.99),
('Hermann Hesse', 'Siddhartha', 'Drama', 7.99),
('Leo Tolstoy', 'War and Peace', 'Satire', 15.99),
('Margaret Atwood', 'The Handmaid''s Tale', 'Science Fiction', 10.99),
('Toni Morrison', 'Beloved', 'Drama', 9.99),
('Stephen King', 'The Shining', 'Horror', 8.99),
('Khaled Hosseini', 'The Kite Runner', 'Drama', 9.99),
('Gillian Flynn', 'Gone Girl', 'Mystery', 8.99);
