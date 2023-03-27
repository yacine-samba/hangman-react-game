import React from "react";

export const Figure = ({ tryLetters }) => {



    const figure = [
        
        <circle cx="90" cy="35" r="10" />,
        <line stroke="#fff" x1="90" y1="45" x2="90" y2="90" />,
        <line stroke="#fff" x1="90" y1="50" x2="60" y2="60" />,
        <line stroke="#fff" x1="90" y1="50" x2="120" y2="60" />,
        <line stroke="#fff" x1="90" y1="90" x2="60" y2="110" />,
        <line stroke="#fff" x1="90" y1="90" x2="120" y2="110" />,
        <line stroke="#fff" x1="90" y1="70" x2="60" y2="80" />,
        <line stroke="#fff" x1="90" y1="70" x2="120" y2="80" />,
        <circle cx="90" cy="40" r="5" />,
        <line stroke="#fff" x1="85" y1="35" x2="95" y2="35" />,
        <line stroke="#fff" x1="90" y1="40" x2="90" y2="60" />,
        <line stroke="#fff" x1="85" y1="65" x2="95" y2="65" />,
        <line stroke="#fff" x1="90" y1="60" x2="90" y2="90" />,
        <line stroke="#fff" x1="85" y1="95" x2="95" y2="95" />,
        <line stroke="#fff" x1="90" y1="90" x2="60" y2="110" />,
        <line stroke="#fff" x1="90" y1="90" x2="120" y2="110" />
    ];

    return (
        <svg width="200" height="200">
            {figure.slice(0, tryLetters)}{/* affiche les parties de dessin correspondant au nombre d'essais restants */}
        </svg>

    )
}

export default Figure;