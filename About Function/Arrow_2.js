function Person() {
    this.age = 0

    setInterval (() => {
        this.age++
        console.log(this.age)
    }, 100)
 
}

new Person