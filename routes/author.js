const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js')


router.get('/', (req, res) => {
  console.log("hello");
  queries.getAuthors().then(books => {
    res.json(books)
  })
})

module.exports = router;
