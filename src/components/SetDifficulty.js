import React from 'react';
import { LevelEnum } from '../common/types';

export const SetDifficulty = (props) => {
    return (
        <div className="difficulty-buttons">
            <div
                className="level-button"
                onClick={() => props.generateBoard(LevelEnum.easy)}
            >
                Easy
            </div>
            <div
                className="level-button"
                onClick={() => props.generateBoard(LevelEnum.medium)}
            >
                Medium
            </div>
            <div
                className="level-button"
                onClick={() => props.generateBoard(LevelEnum.hard)}
            >
                Hard
            </div>
        </div>
    )
}
