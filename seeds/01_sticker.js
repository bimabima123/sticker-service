const Stickers = require('../sticker');

exports.seed = function(knex, Promise) {
  return knex('Sticker').del()
    .then(function () {
      // Inserts seed entries
      return knex('Sticker').insert(Stickers);
    });
};
