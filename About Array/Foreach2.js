//create your own forEach
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const approved = ['Agatha', 'Jesse', 'Max','Anna']

approved.forEach2(function(name,index) {
    console.log(`${index + 1}) ${name}`)

})
