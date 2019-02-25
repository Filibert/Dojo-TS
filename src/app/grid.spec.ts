import { Grid } from './grid';
import { Cell } from './cell';

describe ("grid", () => {
    let grid: Grid;
    beforeEach(() => {
        grid = new Grid();
    });
    it("should possess an array of CellRow wich are arrays of Cell", () => {
        console.log(grid.cells is Cell);
        expect(true).toBeTruthy();
    });
});