const express = require('express');

const Router = express.Router();
const queries = require ('../db/queries')

Router.get('/', (req,res) => {
  queries.getAll().then(stickers => {
    res.json(stickers);
    
  })
})

module.exports = Router;