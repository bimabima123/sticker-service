const knex = require('./knex');


module.exports = {
  getAll(){
    return knex('Sticker')
  }
}