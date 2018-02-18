const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('hello', {
    name: 'Lebron',
    age: 33,
    team: req.query.team || 'Cavs',
    title: 'Now That\'s Delicious',
  });
});

module.exports = router;
