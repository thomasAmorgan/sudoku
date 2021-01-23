import React from 'react';

export const Cell = (props) => {
    return (
        <div
            onClick={props.onClick}
            className={props.className}
        >
            {props.cell.number}
        </div>
    )
}
