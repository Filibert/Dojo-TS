import { Cell } from './cell'

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
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
    dimenson: Dojo.TwoDimensionalCoordinates;
    constructor(size : number){
        this.dimenson = {x: size, y: size};
        for(let i = 0; i < size; i++){
            const cellRow: Cell[] = []; 
            for(let j = 0; j < size; j++){
                const cell = new Cell(j,i,this, undefined);
                if(getRandomInt(10) < 3)
                    cell.isAlive = true;
                cellRow.push(cell)
            }
            this.cells.push(cellRow);
        }
    }
}