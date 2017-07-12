const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js')


router.get('/', (req, res) => {
  console.log("hello");
  queries.getBooks().then(books => {
    res.json(books)
  })
})

router.get('/:id', (req, res) => {
  queries.getOneBook(req.params.id).then(book => {
    res.json(book)
  })
})

module.exports = router;
