function Persona(name) {
    this.name = name
    
    this.speak = function() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Persona('Johnny')
p1.speak
console.log(p1.name)