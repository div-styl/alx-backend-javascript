export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    location: "Paris"
}

const studentsList: Student[] = [student1, student2];

export const Rendertable = (studentsList: Array<Student>): void => {
    const table = document.createElement('table');
    const row = document.createElement('tr');
    table.insertAdjacentElement("beforeend", row);

    // insert the table
    row.insertAdjacentHTML('beforeend', '<th>firstName</th>');
    row.insertAdjacentHTML('beforeend', '<th>location</th>');

    for (const student of studentsList) {
        const stdrow = document.createElement('tr');
        stdrow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        stdrow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', stdrow);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

Rendertable(studentsList);