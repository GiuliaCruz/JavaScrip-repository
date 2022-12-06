//dynamic collection of key/value pairs
const product = new Object
product.name = 'Chair'
product['brand of product'] = 'Random'
product.price = 220 

console.log(product)
delete product.price
delete product['brand of product']
console.log(product)


const car = {
    model: 'A4',
    value: 89000,
    owner: {
        name: Demian,
        age: 30,
        adress: {
            street: 'ABC',
            number: 123
        }
    },
    drivers: [{
        name: 'Robin',
        age: 19
}, {
    name: 'Anna',
    age: 24
    }], 
    CalculateInsuranceAmount: function() {
        // ...
    }
}
