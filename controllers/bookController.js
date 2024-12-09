const { getAllBooks, getBookById, addBook } = require("../models/bookModel");

exports.getBooks = (req, res) => {
  const { genre } = req.query;
  let result = getAllBooks();

  if (genre) {
    result = result.filter((book) => book.genre.toLowerCase() === genre.toLowerCase());
  }

  res.status(200).json(result);
};

exports.getBook = (req, res) => {
  const { id } = req.params;
  const book = getBookById(id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
};

exports.createBook = (req, res) => {
  const { title, author, genre, year, description } = req.body;

  if (!title || !author || !genre || !year || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBook = addBook({ title, author, genre, year, description });
  res.status(201).json({ message: "Book added successfully", book: newBook });
};
