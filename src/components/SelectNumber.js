import React from 'react';

export const SelectNumber = (props) => {
    let validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className='selectNumber'>
            {validNumbers.map((n, index) => 
                <div
                    key={index}
                    className='numberButton'
                    onClick={() => props.setValue(n)}
                >
                    {n}
                </div>
            )}
            <div
                className="numberButton"
                onClick={() => props.setValue(null)}
            >
                X
            </div>
        </div>
    )
}
