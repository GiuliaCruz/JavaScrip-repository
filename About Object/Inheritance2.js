//prototype chain
const grandfather = { attr1: 'A'}
const father = { __proto__: grandfather, attr2: 'B'}
const son = { __proto__: father, attr3: 'C'}
console.log(son.attr1, son.attr2, son.attr3)

const car = {
    currentSpeed: 0,
    maxSpeed: 200,
    speedUp(delta) {
        if (this.currentSpeed + delta <= this.maxSpeed) {
            this.currentSpeed += delta
        } else {
            this.currentSpeed = this.maxSpeed
        }
    }, 
    status() {
        return `${this.currentSpeed}KM/h of ${this.maxSpeed}KM/h`
    }
}

const ferrari = {
    model: 'F40',
    maxSpeed: 324 //shadowing
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.speedUp(100)
console.log(volvo.status())

ferrari.speedUp(300)
console.log(ferrari.status())