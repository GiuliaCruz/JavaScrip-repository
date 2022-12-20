const approved = ['Agatha', 'Jesse', 'Max','Anna']

approved.forEach(function(name,index, array, x) {
    console.log(`${index + 1}) ${name}`)
    console.log(x)
})

approved.forEach(name => console.log(name))

const showApproved = approved => console.log(approved)
approved.forEach(showApproved)