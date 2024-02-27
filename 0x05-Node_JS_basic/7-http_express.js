const express = require('express');

const app = express();

const fs = require('fs').promises;

async function countStudents(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8')
      .then((data) => {
        const db = data
          .toString()
          .split('\n')
          .filter((line) => line.trim() !== '');
        console.log(`Number of students: ${db.length - 1}`);
        const fields = {};
        db.slice(1).forEach((student) => {
          const field = student.split(',')[3];
          const name = student.split(',')[0];
          if (fields[field]) {
            fields[field].push(name);
          } else {
            fields[field] = [name];
          }
        });
        Object.keys(fields).forEach((field) => {
          console.log(
            `Number of students in ${field}: ${
              fields[field].length
            }. List: ${fields[field].join(', ')}`,
          );
        });
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});
