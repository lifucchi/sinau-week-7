const express = require("express");
const { getBooks, getBook, createBook } = require("../controllers/bookController");

const router = express.Router();

router.get("/books", getBooks);

router.get("/books/:id", getBook);

router.post("/books", createBook);

module.exports = router;
