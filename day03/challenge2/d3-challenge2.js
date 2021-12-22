const run = (input) => {
    return bruteForce(input);
};

const bruteForce = (input) => {
    const oxygenRating = oxygenGeneratorRating(input, 0)
    const co2Rating = co2ScrubberRating(input, 0)

    return co2Rating * oxygenRating
};

const oxygenGeneratorRating = (input, col) => {
    if (input.length === 1) {
        return parseInt(input, 2)
    }

    let onesCount = 0
    input.forEach(x => {
        if (x[col] == 1) {
            onesCount++
        }
    })
    
    const winner = onesCount >= input.length/2 ? "1" : "0"
    let newInput =  input.filter(x => x[col] === winner)
    
    return oxygenGeneratorRating(newInput, ++col)
}

const co2ScrubberRating = (input, col) => {
    if (input.length === 1) {
        return parseInt(input, 2)
    }
    
    let onesCount = 0
    input.forEach(x => {
        if (x[col] == 1) {
            onesCount++
        }
    })
    
    const winner = onesCount >= input.length/2 ? "1" : "0"
    let newInput =  input.filter(x => x[col] !== winner)
    
    return co2ScrubberRating(newInput, ++col)
}

module.exports = { run };
