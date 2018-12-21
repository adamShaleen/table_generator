const Utilities = {
    createRowsAndDataCells: (start, increment, maxCells) => {
        const range = [];

        for (let y = start; y <= maxCells; y+= increment) {
            range.push(y);
        }

        const rows = [];
        let currentRow = [];
        let cellsPerRow = 4;

        for (let i = 0; i < range.length; i++) {
            if (i === range.length -1) {
    	        rows.push(currentRow);
            }

    	    if (cellsPerRow > 0) {
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
export default Utilities;
