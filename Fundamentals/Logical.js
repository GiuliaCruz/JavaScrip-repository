// true + true -> true
// true + false -> false
// false + unknown -> false

// true + unknown -> true
// false or true -> true
// false or false -> false

// true xor true -> false
// true xor false -> true
// false xor true -> true
// false xor false -> false

// "!true" -> false
// "!false" -> true

function purchases(work1, work2) {
    const buyIceCream = work1 || work2 // or(?)
    const buyTv50 = work1 && work2 // and (?)
    // const buyTv32 = !!(work1 ^ work2) // bitwise xor
    const buyTv32 = work1 != work2 // different
    const keepHealthy = !buyIceCream // unary operator

    return{buyIceCream, buyTv50, buyTv32, keepHealthy}
}
console.log(purchases(true, true))
console.log(purchases(true, false))
console.log(purchases(false, true))
console.log(purchases(false, false))