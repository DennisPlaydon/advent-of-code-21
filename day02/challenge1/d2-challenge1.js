const run = (input) => {
    return bruteForce(input);
};

const bruteForce = (input) => {
    let depth = 0
    let horizontalPos = 0

    input.forEach(x => {
        let [direction, ...unit] = x.split(' ')
        
        unit = Number(unit)
        switch (direction) {
            case 'forward':
                horizontalPos += unit
                break
            case 'up':
                depth -= unit
                break
            case 'down':
                depth += unit
                break
        }
    })

    return depth * horizontalPos
};

module.exports = { run };
