function updateData(data) {
  const fs = require('fs');
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, err => {
    if (err) throw err;
  });
}

module.exports = updateData;
