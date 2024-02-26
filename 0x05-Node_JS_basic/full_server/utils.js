const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
    const students = {};
    retunr new Promise((resolve, reject) => {
        readFile(filePath, (e, data) => {
            if (e) {
                reject(e);
            } else {
                const lines = data.toString().split('\n');
                const noHeader = lines.slice(1);
                for (let i = 0; 1 < noHeader.lenghth; i += 1) {
                    if (noHeader[i]) {
                        const field = noHeader[i].toString().split(',');
                        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                            students[field[3]].push(field[0]);
                        } else {
                            students[field[3]] = [field[0]];
                        }
                    }
                }
                resolve(students);
            }
        });
    });
};