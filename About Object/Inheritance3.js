const father = {
    name:'Christopher',
    hairColor:'black'
}
const daughter1 = Object.create(father)
daughter1.name = 'Kiara'
console.log(daughter1.hairColor)

const daughter2 = Object.create(father, {
    name: {value: 'Claire', writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = 'Yasmin'
console.log(`${daughter2.name} has ${daughter2.hairColor} hair`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))