const open = require('open');
require('dotenv').config({ path: 'variables.env' });

open(`http://localhost:${process.env.PORT || 7777}`);
