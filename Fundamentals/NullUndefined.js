let value // not started
console.log(value)

value = null //don't have value
console.log(value)
//console.log(value.toString()) // doesn't work

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

product.price = null// without price
console.log(!!product.price)
console.log(product)