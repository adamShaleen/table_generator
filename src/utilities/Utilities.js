const Utilities = {
    createRowsAndDataCells: (start, increment, maxCells) => {
        let range = createRange(start, increment, maxCells);

        let rows = [];
        let currentRow = [];
        let cellsPerRow = 4;

        for (let i = 0; i < range.length; i++) {
            if (i === range.length -1) {
    	        rows.push(currentRow);
            } else if (cellsPerRow > 0) {
    	        currentRow.push(range[i]);
                cellsPerRow--;
            } else {
                currentRow.push(range[i]);
        	    rows.push(currentRow);
        	    currentRow = [];
        	    cellsPerRow = 4;
            }
        }
        return rows;
    }
}

const createRange = (start, increment, max) => {
    let range = [];
    for (let i = start; i <= max; i+= increment) {
        range.push(i);
    }
    return range;
}

export default Utilities;
