const run = (input) => {
    let grid = new Array(1000).fill(0).map(x => new Array(1000).fill(0))

    input.forEach(line => {
        let [start, end] = line.split(' -> ').map(coordinate => coordinate.split(",").map((value) => parseInt(value)))

        const isVertical = start[0] === end[0]
        const isHorizontal = start[1] === end[1]

        if (isVertical) {
            [start, end] = start[1] < end[1] ? [start,end] : [end,start]

            for (let i = start[1]; i <= end[1]; i++) {
                grid[i][start[0]]++
            }
        }

        if (isHorizontal) {
            [start, end] = start[0] < end[0] ? [start,end] : [end,start]

            for (let i = start[0]; i <= end[0]; i++) {
                grid[start[1]][i]++
            }
        }

        if (!isHorizontal && !isVertical) {
            const xDir = start[0] > end[0] ? 'forward' : 'back'
            const yDir = start[1] > end[1] ? 'forward' : 'back'
            
            if (xDir == 'forward' && yDir == 'forward' || xDir == 'back' && yDir == 'back') {
                [start, end] = start[0] < end[0] ? [start,end] : [end,start]
                
                for (let i = start[0]; i <= end[0]; i++) {
                    grid[start[1]][start[0]]++

                    start[0]++
                    start[1]++
                }
            }
            
            if (xDir == 'forward' && yDir == 'back' || xDir == 'back' && yDir == 'forward') {
                [start, end] = start[0] < end[0] ? [start,end] : [end,start]

                for (let i = start[0]; i <= end[0]; i++) {
                    grid[start[1]][start[0]]++

                    start[0]++
                    start[1]--
                }
            }
        }
    })

    return grid.flat().filter(x => x >= 2).length
};

module.exports = { run };