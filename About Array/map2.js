const cart = [
    '{"name": "Eraser", "price": 3.45 }',
    '{"name": "Notebook", "price": 13.90 }',
    '{"name": "Pencil Set", "price": 41.22 }',
    '{"name": "Pen", "price": 41.22 }'
]

const forObject = json => JSON.parse(json)
//const onlyPrice = product => product.price

const result = cart.map(forObject)//.map(onlyPrice)
console.log(result)