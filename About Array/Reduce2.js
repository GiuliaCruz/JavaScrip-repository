const students = [
    {name:'Chris', grade: 7.3, scholar: false},
    {name:'Stella', grade: 9.2, scholar: true},
    {name:'Alex', grade: 9.8, scholar: false},
    {name:'Anna', grade: 8.7, scholar: true},
]

const everyScholar = (result, scholar) => result && scholar
console.log(students.map(a => a.scholar).reduce(everyScholar))

const someScholar = (result, scholar) => result || scholar
console.log(students.map(a => a.scholar).reduce(someScholar))