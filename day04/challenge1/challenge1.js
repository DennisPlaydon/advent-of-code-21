const run = (input) => {
    try {
        const bingoNumbers = input[0].split(",")
        const bingoSheet = [
            '31  5 70  8 88',
            '38 63 14 91 56',
            '22 67 17 47 74',
            '93 52 69 29 53',
            '33 66 64 19 73'
          ]
          GetBingo(bingoSheet, bingoNumbers);
    }
    catch (e) {
        console.log(e);
    }
    // return bruteForce(input);
};

const bruteForce = (input) => {
    const bingoNumbers = input[0].split(",")
    const bingoSheetLength = 5
    const gapBetweenSheets = 1

    let bingoSheetIndex = 2

    let mostEfficientBingoLength = input.length
    let mostEfficientBingoVisitedArray;
    let mostEfficientBingoLastDrawnNumber;
    while (bingoSheetIndex < input.length) {
        let bingoSheet = input.slice(bingoSheetIndex, bingoSheetIndex+5);
        try {
            GetBingo(bingoSheet, bingoNumbers)
        } catch (e) {
            const lastDrawNumber = e[0]
            const visitedArray = e[1]
            console.log(visitedArray.length);
            if (visitedArray.length < mostEfficientBingoLength) {
                mostEfficientBingoLength = visitedArray.length
                mostEfficientBingoVisitedArray = visitedArray
                mostEfficientBingoLastDrawnNumber = lastDrawNumber
                mostEfficientBingoSheetIndex = bingoSheetIndex
            }
        }
        
        bingoSheetIndex += bingoSheetLength + gapBetweenSheets
    }
    
    const winningBingoSheet = input.slice(mostEfficientBingoSheetIndex, mostEfficientBingoSheetIndex+5)
    let unmarkedNumbers = winningBingoSheet.reduce((a,b) => a + ' ' + b).split(/\s+/)
    
    mostEfficientBingoVisitedArray.forEach(node => {
        let yIndex = node[0]
        let xIndex = node[1]
        let crossedOffNumber = winningBingoSheet[yIndex].split(/\s+/)[xIndex]

        unmarkedNumbers.splice(unmarkedNumbers.indexOf(crossedOffNumber), 1)
    })

    const sumOfAllUnmarkedNumbers = unmarkedNumbers.reduce((a,b) => Number(a) + Number(b))

    return sumOfAllUnmarkedNumbers * mostEfficientBingoLastDrawnNumber
};

const GetBingo = (bingoSheet, bingoNumbers) => {
    const lines = bingoSheet.map(x => x.split(/\s+/))

    let visited = []
    bingoNumbers.forEach(number => {
        lines.forEach((line, index) => {
            const innerIndex = line.indexOf(number)

            if (innerIndex == -1) {
                return
            }
            
            const node = [index,innerIndex]
            visited.push(node)

            const isBingo = checkIfNodeCompletesBingo(node, visited)
            if (isBingo) {
                throw [number, visited]
            }
        })
    })
}

const checkIfNodeCompletesBingo = (node, visited) => {
    let verticalFoundCount = 0
    let horizontalFoundCount = 0

    // [0,0][0,1][0,2][0,3][0,4]
    const elementsNeededForHorizonalBingo = []
    
    // [1,0][2,0][3,0][4,0][5,0]
    let elementsNeededForVerticalBingo = []
    
    for (let index = 0; index < 5; index++) {
        elementsNeededForHorizonalBingo.push([node[0], index])
        elementsNeededForVerticalBingo.push([index, node[1]])
    }

    visited.forEach(el => {
        elementsNeededForHorizonalBingo.forEach(needed => {
            if (JSON.stringify(el) == JSON.stringify(needed)) {
                horizontalFoundCount++
            }
        })

        elementsNeededForVerticalBingo.forEach(needed => {
            if (JSON.stringify(el) == JSON.stringify(needed)) {
                verticalFoundCount++
            }
        })
    })

    if (verticalFoundCount == 5 || horizontalFoundCount == 5) {
        // BINGO!
        return true
    }

    return false
}

module.exports = { run };
