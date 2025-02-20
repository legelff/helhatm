var express = require('express');
var router = express.Router();
let { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
let count = [];

prisma.film.groupBy({
  by: ['rating'],
  _count: {
    rating: true
  }
}) .then ((result) => {
  count = result;
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Beacon', name: "test", films: count});
});

// router.post('/login', function(req, res, res) {
//   res.render('index', {title: "login page"});
// })

module.exports = router;
