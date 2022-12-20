console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Alex', 'Tyler', 'Hanna')
console.log(approved)

approved = ['Alex', 'Tyler', 'Hanna']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved[3] = 'Johnny'
approved.push('Jenny')
console.log(approved.length)

approved[9] = 'Raphael'
console.log(approved.length)
console.log(approved[8] === undefined)

console.log(approved)
approved.sort()
console.log(approved)

delete approved[1]
console.log(approved[1])
console.log(approved[2])

approved = ['Alex', 'Tyler', 'Hanna']
approved.splice(1, 2, 'X', 'Y')
console.log(approved)