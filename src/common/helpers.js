import { SudokuCell, SudokuError, ErrorEnum } from './classes';

export const generateSudokuGrid = () => {
    let grid = [];

    for (let i = 0; i < 9; i++) {
        let currentCol = [];
        for (let j = 0; j < 9; j++) {
            let cell = new SudokuCell(i, j, determineBlock(i, j), null);
            currentCol.push(cell);
        }

        grid.push(currentCol);
    }

    return grid;
}

export const determineBlock = (row, col) => {
    if (row < 3) {
        if (col < 3) {
            return 0;
        }
        if (col >= 3 && col < 6) {
            return 1;
        }
        if (col >= 6) {
            return 2;
        }
    }
    if (row >= 3 && row < 6) {
        if (col < 3) {
            return 3;
        }
        if (col >= 3 && col < 6) {
            return 4;
        }
        if (col >= 6) {
            return 5;
        }
    }
    if (row >= 6) {
        if (col < 3) {
            return 6;
        }
        if (col >= 3 && col < 6) {
            return 7;
        }
        if (col >= 6) {
            return 8;
        }
    }
}

export const validateBoard = (board) => {
    let errors = [];

    for (let r = 0; r < board.length; r++) {
        let row = board[r];
        for (let c = 0; c < row.length; c++) {
            let temp = isCellValid(row[c], board);
            if (temp.errorType !== 0) {
                errors.push(temp);
            }
        }
    }

    return errors;
}

export const isCellValid = (cell, board) => {
    if (!isColValid(cell, board[cell.col])) {
        return new SudokuError(cell, ErrorEnum.colError);
    }

    let row = [];
    let block = [];

    board.forEach(r => {
        r.forEach(c => {
            if (cell.row === c.row) {
                row.push(c);
            }
            if (cell.block === c.block) {
                block.push(c);
            }
        });
    });

    if (!isRowValid(cell, row)) {
        return new SudokuError(cell, ErrorEnum.rowError);
    }

    if (!isBlockValid(cell, block)) {
        return new SudokuError(cell, ErrorEnum.blockError);
    }

    return new SudokuError();
}

export const isRowValid = (cell, row) => {
    for (let i = 0; i < row.length; i++) {
        if (cell.number === null && row[i].number === null) {
            return true;
        }
        if (cell.number === row[i].number && cell !== row[i]) {
            return false;
        }
    }

    return true;
}

export const isColValid = (cell, col) => {
    for (let i = 0; i < col.length; i++) {
        if (cell.number === null && col[i].number === null) {
            return true;
        }
        if (cell.number === col[i].number && cell !== col[i]) {
            return false;
        }
    }

    return true;
}

export const isBlockValid = (cell, block) => {
    for (let i = 0; i < block.length; i++) {
        if (cell.number === null && block[i].number === null) {
            return true;
        }
        if (cell.number === block[i].number && cell !== block[i]) {
            return false;
        }
    }

    return true;
}

export const isCellTheSame = (c1, c2) => {
    if (c1.col === c2.col && c1.row === c2.row) {
        return true;
    }

    return false;
}