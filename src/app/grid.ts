import { Cell } from './cell'
import { TwoDimensionalCoordinates } from './@types/TwoDimensionalCoordinates';

export class Grid implements Dojo.Printable{
    print(): void {
       
        this.cells.sort((a, b): number => {
            return a[0].coordinates.y > b[0].coordinates.y ? 1 : -1;
        });
        this.cells.forEach(cellsRow => {cellsRow.sort((a, b): number => {
            return a.coordinates.x > b.coordinates.x ? 1 : -1;
        })})

        for (let i = 0; i < this.dimenson.y; i++){
            console.log(this.cells[i].map(a => a.toString()));          
        }

    }
    cells: Cell[][] = [];
    dimenson: TwoDimensionalCoordinates;
    constructor(){
        this.dimenson = {x:5, y:5};
        for(let i = 0; i < 5; i++){
            const cellRow: Cell[] = []; 
            for(let j = 0; j < 5; j++){
                const cell = new Cell(j,i,this, undefined);
                if(i>=1 && j>=3 && i <=4 && j <=5 )
                    cell.isAlive = true;
                cellRow.push(cell)
            }
            this.cells.push(cellRow);
        }
    }
}