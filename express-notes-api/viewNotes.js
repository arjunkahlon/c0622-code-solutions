function viewNotes(id) {
  const data = require('./data.json');
  if (id === null) {
    const dataArr = [];
    for (const key in data.notes) {
      dataArr.push(data.notes[key]);
    }
    return dataArr;
  } else {
    return data.notes[id];
  }
}

module.exports = viewNotes;
