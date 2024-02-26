const fs = require('fs');

function countStudents(filename) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const fileContents = fs.readFileSync(filename, 'utf-8');
    const lines = fileContents.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          field[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const ll = length - 1;
    console.log(`Number of students: ${ll}`);
    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
      }
    }
  } catch (e) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
