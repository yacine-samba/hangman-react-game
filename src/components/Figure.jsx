import React from "react";

export const Figure = ({ tryLetters }) => {



    const figure = [
        // base
        <line stroke="#fff" stroke-width="3" id="base" x1="0" y1="250" x2="170" y2="250" />,
        <line stroke="#fff" stroke-width="3" id="base" x1="0" y1="250" x2="0" y2="0" />,
        <line stroke="#fff" stroke-width="3" id="base" x1="0" y1="50" x2="50" y2="0" />,
        <line stroke="#fff" stroke-width="3" id="base" x1="0" y1="0" x2="120" y2="0" />,
        <line stroke="#fff" stroke-width="3" id="base" x1="120" y1="0" x2="120" y2="35" />,

        
        // head
        <circle cx="120" cy="55" r="20" stroke="#fff" stroke-width="3" fill="transparent" />,

        // body
        <line stroke="#fff" stroke-width="3" x1="120" y1="75" x2="120" y2="170" />,

        // arms
        <line stroke="#fff" stroke-width="3" id="armL" x1="120" y1="135" x2="170" y2="95" />,
        <line stroke="#fff" stroke-width="3" id="armR" x1="120" y1="135" x2="65" y2="120" />,
        
        // legs
        <line stroke="#fff" stroke-width="3" id="legR" x1="120" y1="170" x2="80" y2="225" />,
        <line stroke="#fff" stroke-width="3" id="legR" x1="120" y1="170" x2="180" y2="225" />,
    ];

    return (
        <svg className="hangman" width="400" height="400">
            {figure.slice(0, tryLetters)}
        </svg>

    )
}

export default Figure;