import React from 'react';

export const Cell = (props) => {
    return (
        <div
            onClick={props.locked ? () => {} : props.selectCell}
            className={props.className}
        >
            {props.number}
        </div>
    )
}
