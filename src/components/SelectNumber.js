import React from 'react';

export const SelectNumber = (props) => {
    let validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className='select-number'>
            {validNumbers.map((n, index) => 
                <div
                    key={index}
                    className='number-button'
                    onClick={() => props.setValue(n)}
                >
                    {n}
                </div>
            )}
            <div
                className="number-button"
                onClick={() => props.setValue(null)}
            >
                X
            </div>
        </div>
    )
}
