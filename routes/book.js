const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js')

function validString(string){
  return string != ''
}

function validURL(url){
  let re = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi.test(url);
  return re;
}

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

router.post('/', function(req, res, next) {
  console.log(validString(req.body.title));
  if(validString(req.body.title) && validString(req.body.genre) && validString(req.body.description) && validURL(req.body.cover_image)){
    queries.createBook(req.body)
    .then(results=>{
      res.send(results[0]);
    })
  }else{
    res.status(400)
    next(new Error('invalid book'))
  }
})

router.delete('/:id', (req, res)=>{
  queries.deleteBook(req.params.id)
  .then(()=>{
    res.json({
      deleted: true
    })
  })
})

router.put('/:id', (req, res)=>{
  queries.editBook(req.params.id, req.body)
  .then(book=>{
    res.json(book[0])
  })
})

module.exports = router;
