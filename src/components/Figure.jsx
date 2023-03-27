import React from "react";

export const Figure = ({ tryLetters }) => {



    const figure = [
        // head
        <circle cx="120" cy="55" r="20" fill="transparent" />,
        
        // body
        <line x1="120" y1="75" x2="120" y2="170" />,

        // arms
        <line id="armL" x1="120" y1="135" x2="170" y2="95" />,
        <line id="armR" x1="120" y1="135" x2="65" y2="120" />,

        // legs
        <line id="legR" x1="120" y1="170" x2="80" y2="225" />,
        <line id="legR" x1="120" y1="170" x2="180" y2="225" />,

        // base
        <line id="base" x1="0" y1="250" x2="170" y2="250" />,
        <line id="base" x1="0" y1="250" x2="0" y2="0" />,
        <line id="base" x1="0" y1="50" x2="50" y2="0" />,
        <line id="base" x1="0" y1="0" x2="120" y2="0" />,
        <line id="base" x1="120" y1="0" x2="120" y2="35" />,

    ];

    return (
        <svg width="400" height="400">
            {figure.slice(0, tryLetters)}
        </svg>

    )
}

export default Figure;