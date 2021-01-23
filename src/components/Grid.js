import React, { Component } from 'react';
import { Cell } from './Cell';
import { SelectNumber } from './SelectNumber';
import { SudokuCell } from '../common/classes';
import { generateSudokuGrid, validateBoard, isCellTheSame } from '../common/helpers';

export default class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameBoard: generateSudokuGrid(),
            selectedCell: new SudokuCell(),
            errors: []
        };

        this.selectCell = this.selectCell.bind(this);
        this.setCellValue = this.setCellValue.bind(this);
        this.doesCellHaveError = this.doesCellHaveError.bind(this);
    }

    selectCell(chooseMe) {
        if (chooseMe !== this.state.selectedCell) {
            this.setState((state, props) => ({
                gameBoard: state.gameBoard,
                selectedCell: chooseMe,
                errors: state.errors
            }));
        } else {
            this.setState((state, props) => ({
                gameBoard: state.gameBoard,
                selectedCell: new SudokuCell(),
                errors: state.errors
            }));
        }
    }

    setCellValue(value) {
        if (this.state.selectedCell.number !== undefined) {
            let tempCell = this.state.selectedCell;
            tempCell.number = value;

            let errs = validateBoard(this.state.gameBoard);

            let tempBoard = [...this.state.gameBoard];
            tempBoard.forEach((cell, i) => {
                if (cell === this.state.selectedCell) {
                    tempBoard[i] = tempCell;
                }
            });

            this.setState({
                gameBoard: tempBoard,
                selectedCell: tempCell,
                errors: errs
            });
        }
    }

    doesCellHaveError(cell) {
        for (let i = 0; i < this.state.errors.length; i++) {
            if (isCellTheSame(this.state.errors[i].inValidCell, cell)) {
                return true;
            }
        }

        return false;
    }

    render() {
        return (
            <React.Fragment>
                <div className="grid">
                    {this.state.gameBoard.map((row, rowIndex) => 
                        <div 
                            key={rowIndex}
                            className="col"
                        >
                            {row.map((currentCell, cellIndex) => 
                                <Cell
                                    key={cellIndex}
                                    className={
                                        this.doesCellHaveError(currentCell) ? 
                                        'cell invalid' : (this.state.selectedCell === currentCell) ? 'cell selected' : 'cell'
                                    }
                                    cell={currentCell}
                                    onClick={() => this.selectCell(currentCell)}
                                />
                            )}
                        </div>
                    )}
                </div>
                <SelectNumber
                    setValue={this.setCellValue}
                />
            </React.Fragment>
        )
    }
}
