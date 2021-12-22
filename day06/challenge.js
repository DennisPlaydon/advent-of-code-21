const run = (input) => {
    return [part1(input), part2(input)]
};

const part1 = (input) => {
    let fish = input[0].split(",").map(x => parseInt(x))
    const _ = [...Array(80)].forEach(_ => fish = processFish(fish))

    return fish.length
}

const processFish = (fish) => {
    let rest = fish.map(x => x === 0 ? 7 : x).map(x => --x)
    fish.filter(f => f === 0).forEach(_ => rest.push(8))

    return rest
}

const part2 = (input) => {
    const days = 256
    const agesOfFishCount = new Array(9).fill(0)
    input[0]
        .split(",")
        .map(x => parseInt(x))
        .forEach(n => agesOfFishCount[n]++)
    
    for (let i = 0; i < days; i++) {
        const zeros = agesOfFishCount[0]
        agesOfFishCount.shift()
        
        agesOfFishCount[6] += zeros
        agesOfFishCount.push(zeros)
    }
    
    return agesOfFishCount.reduce((a,b) => a+b)
}

module.exports = { run };