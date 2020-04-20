const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


router.get('/books', (req, res) => {
  // get all the books
  Book.find().then(books => {
    // render a 'books' view with the books data
    res.render('books', { booksList: books });
  })
  // res.send('this is the books route');
});

router.get('/books/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  Book.findById(bookId).then(book => {
    // res.send(book);
    res.render('bookDetails', { book: book });
  });
});

module.exports = router;