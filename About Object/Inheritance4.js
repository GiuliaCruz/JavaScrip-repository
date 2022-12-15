function MyObject() {}
console.log(MyObject.prototype)

const obj1 = new MyObject
const obj2 = new MyObject
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MyObject.prototype === obj1.__proto__)

MyObject.prototype.name = 'Anonymous'
MyObject.prototype.speak = function() {
    console.log(`Good morning! My name is ${this.name}!`)
}

obj1.speak()

obj2.name = 'Tom'
obj2.speak()

const obj3 = {}
obj3.__proto__ = MyObject.prototype
obj3.name = 'Malfoy'
obj3.speak()

//resume
console.log((new MyObject).__proto__ === MyObject.prototype)
console.log(MyObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)