const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Hello Word');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000');
});
