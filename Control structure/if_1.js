function GoodNews(score){
    if(score >= 7 ) {
        console.log("Approved with ", score)
    }
}

GoodNews(8.1)
GoodNews(6.1)

function IfItsTrueIWillSay(value) {
    if(value) {
        console.log("It's true..." + value) 
    }
}

IfItsTrueIWillSay()
IfItsTrueIWillSay(null)
IfItsTrueIWillSay(NaN)
IfItsTrueIWillSay("")
IfItsTrueIWillSay(0)
IfItsTrueIWillSay(-1)
IfItsTrueIWillSay(" ")
IfItsTrueIWillSay("?")
IfItsTrueIWillSay([])
IfItsTrueIWillSay([1, 2])
IfItsTrueIWillSay({})