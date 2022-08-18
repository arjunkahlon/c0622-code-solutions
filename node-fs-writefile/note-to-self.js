const fs = require('fs');
fs.writeFile('note.txt', process.argv[2].toString() + '\n', err => {
  if (err) throw err;
});
