function updateData(data) {
  const fs = require('fs');
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, err => {
    if (err) {
      console.error(err);
      return 1;
    }
  });
  return 0;
}

module.exports = updateData;
