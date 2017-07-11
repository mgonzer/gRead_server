const knex = require('./knex.js')

module.exports = {
  getBooks: function(){
    return knex('book')
  },
  getAuthors: function() {
    return knex('author')
  }
}
