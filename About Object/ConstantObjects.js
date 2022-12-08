// person -> 123 -> {...}
const person = { name: 'Chris'}
person.name = 'Alex'
console.log(person)

//person -> 456 -> {...} 
//person = { name: 'Claire'}

Object.freeze(person)

person.name = 'Jonas'
console.log(person.name)
