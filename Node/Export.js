console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports = 3

exports = null
console.log(module.exports)

exports = {
    name: 'Text'
}

console.log(module.exports)

module.exports = { public: true}