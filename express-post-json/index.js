const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(createGradesArr(grades));
});

app.post('/api/grades', (req, res) => {
  const receivedObj = req.body;
  receivedObj.id = nextId;
  grades[receivedObj.id] = receivedObj;
  nextId++;
  res.status(201);
  res.json(grades[receivedObj.id]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});

function createGradesArr(grades) {
  const gradesArr = [];

  for (const key in grades) {
    gradesArr.push(grades[key]);
  }

  return gradesArr;
}
