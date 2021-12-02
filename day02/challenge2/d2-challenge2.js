const run = (input) => {
    return bruteForce(input);
};

const bruteForce = (input) => {
    let depth = 0
    let horizontalPos = 0
    let aim = 0

    input.forEach(x => {
        let [direction, ...unit] = x.split(' ')
        
        unit = Number(unit)
        switch (direction) {
            case 'forward':
                horizontalPos += unit
                depth += aim * unit
                break
            case 'up':
                aim -= unit
                break
            case 'down':
                aim += unit
                break
        }
    })

    return depth * horizontalPos
};

module.exports = { run };
