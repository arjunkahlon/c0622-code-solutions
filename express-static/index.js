const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, '/public');
const fileServer = express.static(absolutePath);
app.use(fileServer);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('App is listening on port 3000');
});
