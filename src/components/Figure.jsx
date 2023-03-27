import { useEffect, useRef } from "react"

export const Figure = ({ tryLetters }) => {

    const svg = useRef(null);

    useEffect(() => {
        const hangmanassets = [
            {
                'error': 10,
                'svg': '<rect x="20" y="270" width="120" height="10" fill="white"/>'
            },
            {
                'error': 9,
                'svg': '<rect x="60" y="30" width="10" height="250" fill="white"/>'
            },
            {
                'error': 8,
                'svg': '<rect x="60" y="30" width="80" height="10" fill="white"/>'
            },
            {
                'error': 7,
                'svg': '<circle cx="100" cy="70" r="20" fill="white"/>'
            },
            {
                'error': 6,
                'svg': '<rect x="100" y="90"  fill="white"/>'
            },
            {
                'error': 5,
                'svg': '<rect x="100" y="100" fill="white"/>'
            },
            {
                'error': 4,
                'svg': '<rect x="100" y="100" fill="white"/>'
            },
            {
                'error': 3,
                'svg': '<rect x="100" y="160" fill="white"/>'
            },
            {
                'error': 2,
                'svg': '<rect x="100" y="160" fill="white"/>'
            },
            // Ajout de la corde
            {
                'error': 1,
                'svg': '<line x1="100" y1="30" x2="100" y2="50" stroke="white" stroke-width="4"/>'
            }
        ];

        const hangman = svg.current;
        const hangmanassetsLength = hangmanassets.length;
        const hangmanassetsError = hangmanassets.map(asset => asset.error);
        const hangmanassetsSvg = hangmanassets.map(asset => asset.svg);

        for (let i = 0; i < hangmanassetsLength; i++) {
            if (tryLetters === hangmanassetsError[i + 1]) {
                hangman.innerHTML += hangmanassetsSvg[i];
            }
        }

    }, [tryLetters])

    return (
        <svg ref={svg} width="500" height="500" viewBox="0 0 381 395" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
    )
}

export default Figure;