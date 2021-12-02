const run = (input) => {
    return bruteForce(input);
};

const bruteForce = (input) => {
    let pos = 0;
    let arr = []

    while (pos < input.length) {
        sumNextThree = input.slice(pos, pos+3).reduce((a, b) => Number(a) + Number(b), 0)
        arr.push(sumNextThree)
        pos++
    }

    return compareDepths(arr)
};

const compareDepths = (input) => {
    let depthIncreaseCount = 0;

    let previous = input[0]
    input.slice(1).forEach(x => {
        if (Number(x) > previous) {
            depthIncreaseCount++;
        }
        
        previous = x;
    })

    return depthIncreaseCount
};

module.exports = { run };
