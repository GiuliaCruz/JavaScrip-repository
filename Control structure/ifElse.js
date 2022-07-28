const printResult = function(score) {
    if(score >= 7) {
        console.log("Approved!")
    } else {
        console.log("Disapproved!")
    }
}

printResult(10)
printResult(4)
printResult("Oops") // be careful!!!