function rand({min = 0, max = 1000}) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

console.log(rand({ max: 50, min: 40 }))
console.log(rand(obj))
console.log(rand({min: 955 }))
