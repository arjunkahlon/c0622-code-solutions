const fs = require('fs');
const fileChoice = process.argv[2];

fs.readFile(fileChoice, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
