function area(width, height) {
    const area = width * height
    if (area > 20) {
        console.log(`Value above the allowed: ${area}m2.`) 
    } else {
        return area
    }
}
    console.log(area(2, 2))
    console.log(area(2))
    console.log(area())
    console.log(area(2 , 3 , 17, 22))
    console.log(area(5 , 5))
