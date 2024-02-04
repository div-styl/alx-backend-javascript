export interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

export interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

export class Director implements DirectorInterface {
    workFromHome ():string {
        return 'Working from home'
    }
    getCoffeeBreak () :string {
        return 'Getting a coffee break'
    }
    workDirectorTasks () {
        return 'Getting to director tasks'
    }
}

export class Teacher implements TeacherInterface {
    workFromHome ():string {
        return 'Cannot work from home'
    }
    getCoffeeBreak () :string {
        return 'Cannot have a break'
    }
    workTeacherTasks () {
        return 'Getting to work'
    }
}

export function createEmployee (salary: number | string): Director | Teacher {
    if ( typeof salary === 'number' && salary < 500) {
        return new Teacher()
    } else {
        return new Director()
    }
}

export function isDirector (employee: Director | Teacher) {
    return employee instanceof Director
}

export function executeWork (employee: (Director | Teacher)): string {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    } else {
        return (employee as Teacher).workTeacherTasks();
    }
}

export type Subject = 'Math' | 'History';

export function teachClass (todayClass: Subject): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}