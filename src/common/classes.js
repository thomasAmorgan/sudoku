export class SudokuCell {
    constructor(col, row, block, number) {
        this.col = col;
        this.row = row;
        this.block = block;
        this.number = number;
    }
}

export class SudokuError {
    constructor(cell, errorType) {
        this.inValidCell = cell || new SudokuCell();
        this.errorType = errorType || ErrorEnum.noError;
    }
}

export const ErrorEnum = {
    noError: 0,
    colError: 1,
    rowError: 2,
    blockError: 3,
}