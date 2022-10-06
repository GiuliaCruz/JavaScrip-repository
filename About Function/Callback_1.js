const manufacturers = ["Mercedes","Audi", "BMW"]

function reveal(name, index) {
    console.log(`${index + 1}. ${name}`)
}

manufacturers.forEach(reveal)
manufacturers.forEach(manufacturer => console.log(manufacturer))