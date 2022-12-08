//using literal notation
const obj1 = {}
console.log(obj1)

//object JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//constructor functions
function Product(name, price, disc) {
    this.name = name
    this.getPriceWithDiscount = () => {
        return price * (1 - disc)
    }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Computer', 2998.99, 0.25)
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount())

//factory functions
function createEmployee(name, basicSalary, absences) {
    return {
        name,
        basicSalary,
        absences,
        getSalary() {
            return (basicSalary / 30) * (30 - absences)
        }
    }
}

const e1 = createEmployee('Jake', 7980, 4)
const e2 = createEmployee('Claire', 11400, 1)
console.log(e1.getSalary(), e2.getSalary())

//Object.create
const son = Object.create(null)
son.name = 'Christopher'
console.log(son)

