const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port '+PORT);
});
