function Person() {
    this.age = 0

    const self = this
    setInterval(function() {
        this.age++
        console.log(this.age)
    }/*.bind(this)*/, 1000)
}

new Person