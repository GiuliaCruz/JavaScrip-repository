const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop() //Massa broke his car!
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() // remove the first!
console.log(pilots)

pilots.unshift('Hamilton')
console.log(pilots)

//add
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

//remove
pilots.splice(3, 1) //Massa's car broke again :v
console.log(pilots)

const somePilots1 = pilots.slice(2) //new array
console.log(somePilots1)

const somePilots2 = pilots.slice(1, 4)
console.log(somePilots2)