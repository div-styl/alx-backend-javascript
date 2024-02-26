const { readFile } = require('fs');

function countStudents(filename) {
    const studenst = {};
    const fields = {};
    let length = 0;

    return new Promise((resolve, reject) => {
        readFile(filename, (error, data) => {
            if (error) {
                reject(Error('Cannot load the database'));
            } else {
                const lines = fileContents.toString().split('\n');
                for (let i = 0; i < lines.length; i += 1) {
                    if (lines[i]) {
                        length += 1;
                        const field = lines[i].toString().split(',');
                        if (Object.prototype.hasOwnProperty.call(studenst, field[3])) {
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
                resolve(data);
            }
        });
    });
}


module.exports = countStudents;
