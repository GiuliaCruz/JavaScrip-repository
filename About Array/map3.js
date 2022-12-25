Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const cart = [
    '{"name": "Eraser", "price": 3.45 }',
    '{"name": "Notebook", "price": 13.90 }',
    '{"name": "Pencil Set", "price": 41.22 }',
    '{"name": "Pen", "price": 41.22 }'
]

const forObject = json => JSON.parse(json)
//const onlyPrice = product => product.price
const result = cart.map2(forObject)//.map(onlyPrice)
console.log(result)