const run = (input) => {
    return bruteForce(input);
};

const bruteForce = (input) => {
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
