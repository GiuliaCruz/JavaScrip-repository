{
    {
        {
            {
                {
                    var whatever = "whatever"
                    console.log(whatever)
                }
            }
        }
    }
}
//global and visible
console.log(whatever)

//function and invisible
function test() {
    var local = 123
    console.log(local)
}
 // test()
// console.log(local) // doesn't work