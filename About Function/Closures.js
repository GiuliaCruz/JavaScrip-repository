//Closure is the scope created when a function is declared 
//Allows the function to access and manipulate variables external to the function

//Lexical Scope acting!

const x = 'Global'

function out() {
    const x = 'Local'
    function inside() {
        return x
    }
    return inside
}

const myFunction = out()
console.log(myFunction())