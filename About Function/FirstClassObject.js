//literal form
function name(params) {}

//store in a variable
const name = function () {}

//store in a array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//store in an object attribut
const obj = {}
obj.talk = function () {return 'Hey'}
console.log(obj.talk())

//pass function as parameter
function run(fun) {
    fun()
}

 run(function (){ console.log('Loading...') })

//A function can return/contain a function
function sum(a, b) {
    return function(c) {
        console.log(a + b + c) 
    }
}

sum(2 , 3) (4)
const fiveMore = sum(2, 3)
fiveMore(4)