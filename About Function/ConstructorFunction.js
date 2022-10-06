function Car(maximumSpeed = 200, delta = 5) {
    //private attribute - let or const
    let currentSpeed = 0

    //public method - this
    this.speedUp = function () {
        if(currentSpeed + delta <= maximumSpeed) {
            currentSpeed += delta
        } else {
            currentSpeed = maximumSpeed
        }
    }

    //public method - this
    this.getCurrentSpeed = function () {
        return currentSpeed
    }
}

const uno = new Car
uno.speedUp()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.speedUp()
ferrari.speedUp()
ferrari.speedUp()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)
