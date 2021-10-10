import express from 'express';

const route = express.Router();

route
  .get('/', function(req, res) {
    console.log({req, res});
    res.send('/books');
  });

export default route;