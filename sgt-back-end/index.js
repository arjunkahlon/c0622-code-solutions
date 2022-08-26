const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    SELECT * FROM "grades"
    `;
  db.query(sql).then(result => {
    const grades = result.rows;
    return res.status(200).json(grades);
  }).catch(err => {
    console.error(err);
    return res.status(500).json({ error: 'An unexpected error occured' });
  });
});

app.post('/api/grades', (req, res, next) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    return res.status(400).json({ Error: 'Missing name, course, or score.' });
  } else if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    return res.status(400).json({ Error: 'Score is invalid.' });
  }
  const { name, course, score } = req.body;
  const sql = `insert into "grades"
                   ("name", "course", "score")
            values ($1, $2, $3)
            returning *`;
  const gradesArr = [name, course, score];

  db.query(sql, gradesArr).then(result => {
    res.status(201).json(result.rows[0]);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected error occurred' });
  });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  if (!req.body.name || !req.body.course || !req.body.score) {
    return res.status(400).json({ Error: 'Missing name, course, or score.' });
  } else if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    return res.status(400).json({ Error: 'Score is invalid.' });
  }
  const { name, course, score } = req.body;
  const sql = `update "grades"
               set  "name" = $1,
                    "course" = $2,
                    "score" = $3
                  where "gradeId" = $4
            returning *`;
  const gradesArr = [name, course, score, gradeId];
  db.query(sql, gradesArr).then(result => {
    if (!result.rows[0]) {
      return res.status(404).json({ Error: 'Selected ID does not exist in database' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected Error has occured' });
  });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      Error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `delete from "grades"
                  where "gradeId" = $1
                returning *
              `;

  const params = [Number(gradeId)];
  db.query(sql, params).then(result => {
    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      return res.status(400).json({ Error: 'Id does not exist in database' });
    } else {
      res.status(204).json();
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected Error has occured' });
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000');
});
