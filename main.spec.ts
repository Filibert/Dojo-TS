import {AliveCell} from './main'

describe("main",() => {
    it("should be true", () => {
        const aliveCell: AliveCell = new AliveCell(0, 1);
        const aliveCell1: AliveCell = new AliveCell(0, 1);
        const aliveCell2: AliveCell = new AliveCell(0, 1);
        expect(aliveCell.shouldDie([aliveCell1, aliveCell2])).toBeFalsy();
    })
})