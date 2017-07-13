const knex = require('./knex.js')

module.exports = {
  getBooks: function(){
    return knex('book')
      // .innerJoin('book_author', 'book.id', 'book_author.book_id')
      // .innerJoin('author', 'author.id', 'book_author.author_id')
  },
  getAuthors: function() {
    return knex('author')
  },
  getOneBook: function(id) {
    return knex('book').where('id', id).first();
  },
  createBook: function(book){
    return knex('book').insert(book).returning('*');
  },
  deleteBook: function(id){
    return knex('book').where('id', id).del();
  }
}
