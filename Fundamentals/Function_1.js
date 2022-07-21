//function without return

function sum(a, b) {
    console.log(a + b)
}

sum(2, 3)
sum(2)
sum(2, 10, 4, 5, 6 , 7, 8)

//function with return
    function sum(a, b = 1){
        return a + b
    }

    console.log(sum(2, 3))
    console.log(sum(2))
    console.log(sum())