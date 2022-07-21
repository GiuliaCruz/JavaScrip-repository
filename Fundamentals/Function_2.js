//store a function into a variable
const sum1 = function (a, b) {
    console.log(a + b)
}

sum1(2, 3)

//store a arrow function into a variable
const sum2 = (a, b) => {
    return a + b
}

console.log(sum2(2,3))

//implicit return
const subtraction = (a, b) => a - b
console.log(subtraction(2, 3))
