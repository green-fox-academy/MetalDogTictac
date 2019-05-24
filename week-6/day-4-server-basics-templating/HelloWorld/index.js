'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => 
  res.render('home', {title: 'Hello World'})
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));

/* What we have done:

We use app.set('view engine', 'ejs'); to tell express to use EJS as our templating engine Express will automatically look inside the views/ folder for template files
The res.render() method is used to render the view we pass it and send the HTML to the client */
