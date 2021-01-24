import React from 'react';

export const Cell = (props) => {
    return (
        <div
            onClick={props.locked ? () => {} : props.onClick}
            className={props.className}
        >
            {props.number}
        </div>
    )
}
