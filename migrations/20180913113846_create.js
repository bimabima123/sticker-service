
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Sticker', (table) => {
      table.increments();
      table.text('title');
      table.text('descriptions');
      table.float('ratting');
      table.text('url');

    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Sticker');
};
