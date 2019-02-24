import { Cell } from './cell'
import { TwoDimensionalCoordinates } from './@types/TwoDimensionalCoordinates';
import { Printable } from './@types/Printable.d';

export class Grid implements Printable{
    print(): void {
        this.cells.sort((a, b): number => {
            return a.coordinates.x > b.coordinates.x ? 1 : -1;
        });
        this.cells.sort((a, b): number => {
            return a.coordinates.y > b.coordinates.y ? 1 : -1;
        });
        let stringsCells = this.cells.map(a => a.toString());

        for (let i = 0; i < this.dimenson.y; i++){
            const start = this.dimenson.x * i;
            const end = this.dimenson.x * i + this.dimenson.x;
            console.log(stringsCells.slice(start, end))
        }
    }
    cells: Cell[] = [];
    dimenson: TwoDimensionalCoordinates;
    constructor(){
        this.dimenson = {x:10, y:10};
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                const cell = new Cell(i,j,this);
                if(i>=4 && j>=6 && i <=7 && j <=7 )
                    cell.isAlive = true;
                this.cells.push(cell)
            }
        }
    }
}