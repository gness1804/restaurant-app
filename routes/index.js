const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const bill = {
    first: 'Bill',
    last: 'Clinton',
    party: 'Democrat',
    children: [
      'Chelsea',
    ],
  };
  res.json(bill);
});

module.exports = router;
