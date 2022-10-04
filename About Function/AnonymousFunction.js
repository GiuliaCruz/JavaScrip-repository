const sum = function (x, y) {
    return x + y
}

const loadingResult = function (a, b, operation = sum) {
    console.log(operation(a , b))
}

loadingResult(3, 4)
loadingResult(3, 4, sum)
loadingResult(3 , 4, function (x, y){
    return x - y
})
loadingResult(3, 4, (x, y) => x * y)

const person = {
    speak: function () {
        console.log("Hello")
    }
}

person.speak()