const school = "Cod3r"

console.log(school.charAt(4))
console.log(school.charAt(5))
console.log(school.charCodeAt(3)) //unicode-table
console.log(school.indexOf("3"))

console.log(school.substring(1))
console.log(school.substring(0, 3))

console.log("school " . concat(school). concat("!"))
console.log(school.replace(3, "e"))
console.log(school.replace(/\w/g, "e"))
console.log(school.replace(/\d/, "e"))
