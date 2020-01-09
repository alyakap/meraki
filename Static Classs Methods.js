class Runner {
    constructor() {
        this.miles = 0
    }
    static calcAvg(arr) {
        return arr.reduce((acc, sum) => acc + sum, 0) / arr.length
    }
    exercise(miles) {
        this.miles += miles
    }
}


const runner1 = new Runner()
const runner2 = new Runner()
const runner3 = new Runner()

runner1.exercise(5)
runner1.exercise(5)
runner1.exercise(5)
runner1.exercise(10)

runner2.exercise(30)


Runner.calcAvg([runner2, runner1])


