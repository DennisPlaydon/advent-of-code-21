const { fsync } = require("fs");

const run = (input) => {
    return [part1(input), part2(input)]
};

const part1 = (input) => {
    const formatted = input[0].split(",").map(x => parseInt(x))
    const max = Math.max(...formatted)

    let cheapestFuelSpend = max*max
    for (let align = 0; align <= max; align++) {
        let fuelSpend = 0
        for (let i = 0; i < formatted.length; i++) {
            fuelSpend += Math.abs(align - formatted[i])
        }

        if (fuelSpend < cheapestFuelSpend) {
            cheapestFuelSpend = fuelSpend
        }
    }

    return cheapestFuelSpend;
}

const part2 = (input) => {
    const formatted = input[0].split(",").map(x => parseInt(x))
    const max = Math.max(...formatted)

    let cheapestFuelSpend = -1
    for (let align = 0; align <= max; align++) {
        let fuelSpend = 0
        for (let i = 0; i < formatted.length; i++) {
            const diff = Math.abs(align - formatted[i])
            const multiplier = 0.5*(diff**2) + 0.5*diff
            fuelSpend += multiplier
        }

        if (fuelSpend < cheapestFuelSpend || cheapestFuelSpend == -1) {
            cheapestFuelSpend = fuelSpend
        }
    }

    return cheapestFuelSpend;
}

module.exports = { run };