const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Render the corresponding EJS template with data
  res.render('home', { name: 'Your Name' });
});

module.exports = router;