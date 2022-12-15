class Release {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class FinancialCycle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.releases = []
    }

    addReleases(...releases) {
        releases.forEach(l => this.releases.push(l))
    }

    summary() {
        let.consolidatedValue = 0
        this.releases.forEach(l => {
            consolidatedValue += l.value
        })
        return consolidatedValue
    }
}

const wage = new Release('Wage', 45000)
const electricityBill = new Release('Eletricity', -220)

const bills = new FinancialCycle(6, 2018)
bills.addReleases(wage, electricityBill)
console.log(bills.summary())