'use client'
import React, { useState } from 'react';

interface IProgressBarWithPointerProps{
    currentReading:number
}
const ProgressBarWithPointer:React.FC<IProgressBarWithPointerProps> = ({currentReading}):React.JSX.Element => {
    const [progress, setProgress] = useState(currentReading); // Progress value (0 to 100)



    const progressBarStyle = {
        width: '100%',
        height: '10px',
        background: 'linear-gradient(to right, green, yellow, red)',
        borderRadius: '5px',
        position: 'relative',
    };

    const pointerStyle = {
        position: 'absolute',
        top: '-2px', // Adjust to position the pointer above the line
        left: `${progress}%`, // Position the pointer based on progress
        transform: 'translateX(-50%)', // Center the pointer on the progress value
        width: '5px',
        height: '15px',
        backgroundColor: 'black',
        borderRadius: '2px',
    };

    const handleProgressChange = (event) => {
        const value = Math.min(100, Math.max(0, event.target.value)); // Ensure value is between 0 and 100
        setProgress(value);
    };

    return (
        <div>
            <div style={progressBarStyle}>
                <div style={pointerStyle}></div>
            </div>

        </div>
    );
};

export default ProgressBarWithPointer;
