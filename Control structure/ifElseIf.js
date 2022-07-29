Number.prototype.between = function(beginning, end) {
    return this >= beginning && this <= end
}

const printResult = function (score) {
    if (score.between(9, 10)) {
        console.log("Honor Board")
    } else if (score.between(7, 8.99)) {
        console.log("Approved")
    } else if (score.between(4, 6.99)) {
        console.log("Retake test")
    } else if (score.between(0, 3.99)) {
        console.log("Disapproved")
    } else {
        console.log("Invalid Score")
    }

    console.log("End")
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)