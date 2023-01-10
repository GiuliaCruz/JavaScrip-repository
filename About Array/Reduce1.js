const students = [
    {name:'Chris', grade: 7.3, scholar: false},
    {name:'Stella', grade: 9.2, scholar: true},
    {name:'Alex', grade: 9.8, scholar: false},
    {name:'Anna', grade: 8.7, scholar: true},
]

const result = students.map( a => a.grade).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
}, 0)

console.log(result)