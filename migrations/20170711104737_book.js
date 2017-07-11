
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', table=>{
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('genre').notNullable();
    table.text('description').notNullable();
    table.text('cover_image').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book')
};
