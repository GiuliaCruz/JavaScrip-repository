let double = function (a) {
    return 2 * a
} 
double = (a) => {
    return 2 * a
} 

double = a => 2 * a //return implicit
console.log(double(Math.PI))

let hello = function () {
    return "Hello"
}

hello = () => "hello" // default 
hello = _ => "hello" // still have a param
console.log(hello())