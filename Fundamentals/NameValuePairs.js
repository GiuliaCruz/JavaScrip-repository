//pair name/value
const greeting =  "Hey"

function exec() {
    const greeting ="Helloo"
    return greeting
}

//objects = aligned groups of name/value pairs
const Customer = {
    name: "Vincent",
    age: 32,
    weight: 90,
    address: {
        Street:"Whatever",
        number: 123,
    }   
}

console.log(greeting)
console.log(exec())
console.log(Customer)