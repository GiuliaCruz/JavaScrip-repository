//Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Random', price: 1.99, tag: 'sale'
})
console.log('Extensible:',Object.isExtensible(product))

product.name = 'Eraser'
product.description = 'White school eraser'
delete product.tag
console.log(product)

//Object.seal
const person = {
    name: 'Nick',
    age: 35
}
Object.seal(person)
console.log('Sealed:', Object.isSealed(person))

person.lastName = 'Collen'
delete person.name
person.age = 29
console.log(person)

//Object.freeze = sealed + constant values