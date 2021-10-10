// Methods
import express from 'express';

const route = express.Router();

route
  .get('/', function(req, res) {
    res.status(200);
    res.send('/auth');
  });

export default route;