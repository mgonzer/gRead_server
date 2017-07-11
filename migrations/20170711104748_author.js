
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', table=> {
    table.increments('id').primary();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('biography').notNullable();
    table.text('portrait_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('author');
};
