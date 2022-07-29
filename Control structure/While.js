function getRandomNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let alternative = 0

while(alternative != 1) {
    alternative = getRandomNumberBetween(-1, 10)
    console.log(`chosen alternative was ${alternative}.`)
}

console.log("See ya!") 