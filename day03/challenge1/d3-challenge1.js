const run = (input) => {
    return bruteForce(input);
};

const bruteForce = (input) => {
    const tenDigitValues = [0,0,0,0,0,0,0,0,0,0,0,0]
    const fullLength = input.length

    input.forEach(x => {
        for (let index = 0; index < x.length; index++) {
            const element = x[index];
            if (element == 1) {
                tenDigitValues[index] += 1
            }
        }
    })

    let gammaDigits = ""
    let epsilonDigits = ""
    tenDigitValues.forEach(columnTotal => {
        // There are more 1's than 0's in the column
        if (columnTotal > fullLength/2) {
            gammaDigits += "1"
            epsilonDigits += "0"
            return
        }
        
        gammaDigits += "0"
        epsilonDigits += "1"
    })

    return parseInt(gammaDigits, 2) * parseInt(epsilonDigits, 2)
};

module.exports = { run };
