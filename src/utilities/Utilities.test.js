import Utilities from './Utilities';
import Defaults from './Defaults';

describe('Utilities test', () => {
    it('createRowsAndDataCells returns valid array data', () => {
        expect(Utilities.createRowsAndDataCells(8, 1, 29)).toEqual(Defaults.redTableDefault.rows);
    });

    it('createRange returns correct range', () => {
        expect(Utilities.createRange(1, 1, 5)).toEqual([1, 2, 3, 4, 5]);
    });
});
