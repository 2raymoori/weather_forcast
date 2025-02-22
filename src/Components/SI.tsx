import React from 'react';

const SeverityIndicator = () => {
    const lineStyle = {
        width: '100%',
        height: '10px',
        background: 'linear-gradient(to right, green, yellow, red)',
        borderRadius: '5px',
    };

    return (
        <div style={lineStyle}></div>
    );
};

export default SeverityIndicator;
