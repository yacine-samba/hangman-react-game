import React, { useContext, useEffect, useState } from 'react'
import PopupEnd from './PopupEnd';

import { LangContext } from "../context/langContext";
import Figure from './Figure';

export const Word = () => {

    const { lang } = useContext(LangContext);
    const [word, setWord] = useState('');
    const DEFAULT_TRY = -11;
    const [tryLetters, setTryLetters] = useState(DEFAULT_TRY);
    const [hidden, setHidden] = useState('');
    const letter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const [endValue, setendValue] = useState(null);
    const isWin = endValue === 'win';

    const fetchWord = () => {
        fetch('http://localhost:3001', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'locale': lang
            })
        })
            .then(res => res.json())
            .then(data => {
                setWord(data.word)
                console.log(data.word + ' ' + lang)
                const underscore = data.word.replace(/[a-z]/gi, '_').replace(/ /g, ' ').replace(/-/g, '-');
                setHidden(underscore);
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchWord();
    }, [lang])

    const checkLetters = (letter) => {
        if (tryLetters === 0) return;
        const wordArray = word.split('');
        const invisibleArray = hidden.split('');
        let count = 0;
        wordArray.forEach((wordLetter, index) => {
            if (wordLetter === letter) {
                invisibleArray[index] = letter;
                count++;
            }
        })
        if (count === 0) {
            setTryLetters(tryLetters + 1);
        }
        setHidden(invisibleArray.join(''));
    }
    
    const handleKeyPress = (e) => {
        if (word) {
            if (!letter.includes(e.key.toLowerCase())) {
                return;
            }
            const letterBtn = document.querySelectorAll('.letter');
            letterBtn.forEach(btn => {
                if (btn.innerText.toLowerCase() === e.key.toLowerCase()) {
                    btn.click();
                }
            })
        }
    }

    const handleLetter = (e) => {
        if (word) {
            checkLetters(e.target.innerText.toLowerCase());
            const isCorrect = word.includes(e.target.innerText.toLowerCase());
            e.target.disabled = true;
            if (isCorrect) {
            } else {
                e.target.disabled = true;
                e.target.classList.add('incorrect');
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    const handleRestart = async () => {
        setTryLetters(DEFAULT_TRY);
        fetchWord();
        const letterBtn = document.querySelectorAll('.letter');
        letterBtn.forEach(e => {
            e.disabled = false;
            e.classList.remove('incorrect');
        })
        setendValue(null);
    }

    useEffect(() => {
        if (word || hidden) {
            if (tryLetters === 0) {
                setendValue("loose")
            }
            if (hidden === word) {
                setendValue("win")
            }
        }
    }, [hidden, tryLetters, word])

    return (
        <div>
        <Figure tryLetters={tryLetters} />
            <button className='restart' onClick={() => handleRestart()}>
                <svg viewBox="0 0 19 21" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.43749 20.4569C5.48674 19.9143 3.89583 18.8525 2.66477 17.2717C1.43371 15.6909 0.818176 13.8709 0.818176 11.8117C0.818176 10.7451 0.9981 9.72978 1.35795 8.76571C1.7178 7.80164 2.22916 6.91766 2.89204 6.11377C3.10037 5.88922 3.35606 5.77208 3.65909 5.76235C3.96212 5.75262 4.23674 5.86976 4.48295 6.11377C4.69128 6.31961 4.80037 6.57223 4.81022 6.87163C4.82007 7.17103 4.72045 7.45172 4.51136 7.71369C4.05681 8.29378 3.70643 8.93001 3.46022 9.62237C3.21401 10.3147 3.0909 11.0445 3.0909 11.8117C3.0909 13.3275 3.5409 14.6796 4.4409 15.8683C5.3409 17.0569 6.50075 17.866 7.92045 18.2956C8.16666 18.3705 8.37007 18.5108 8.53068 18.7167C8.69128 18.9225 8.77196 19.1471 8.77272 19.3903C8.77272 19.7646 8.64015 20.0595 8.37499 20.2751C8.10984 20.4906 7.79734 20.5513 7.43749 20.4569ZM12.3807 20.4569C12.0208 20.5505 11.7083 20.485 11.4432 20.2605C11.178 20.0359 11.0454 19.7365 11.0454 19.3623C11.0454 19.1377 11.1261 18.9225 11.2875 18.7167C11.4489 18.5108 11.6523 18.3705 11.8977 18.2956C13.3182 17.8465 14.4784 17.0325 15.3784 15.8537C16.2784 14.6748 16.728 13.3275 16.7273 11.8117C16.7273 9.94049 16.0644 8.34992 14.7386 7.04004C13.4129 5.73016 11.803 5.07522 9.90909 5.07522H9.82386L10.2784 5.52432C10.4867 5.73016 10.5909 5.99214 10.5909 6.31025C10.5909 6.62836 10.4867 6.89034 10.2784 7.09618C10.0701 7.30201 9.80492 7.40493 9.48295 7.40493C9.16098 7.40493 8.89583 7.30201 8.68749 7.09618L6.30113 4.73839C6.18749 4.62612 6.10719 4.50449 6.06022 4.3735C6.01325 4.24251 5.98939 4.10217 5.98863 3.95247C5.98863 3.80277 6.01249 3.66242 6.06022 3.53143C6.10795 3.40045 6.18825 3.27882 6.30113 3.16654L8.68749 0.808757C8.89583 0.602919 9.16098 0.5 9.48295 0.5C9.80492 0.5 10.0701 0.602919 10.2784 0.808757C10.4867 1.0146 10.5909 1.27657 10.5909 1.59468C10.5909 1.9128 10.4867 2.17477 10.2784 2.38061L9.82386 2.82971H9.90909C12.447 2.82971 14.5966 3.69985 16.3579 5.44011C18.1193 7.18038 19 9.30426 19 11.8117C19 13.8514 18.3845 15.6665 17.1534 17.2571C15.9223 18.8477 14.3314 19.9143 12.3807 20.4569Z" fill="white" />
                </svg>
            </button>
            <h2 className="hiddenWord">{hidden}</h2>
            <div className='keyboard'>{
                letter.map((letter, index) => {
                    return (
                        <button key={index} className="letter" onClick={(e) => handleLetter(e)}>
                            {letter}
                        </button>
                    )
                })
            }
            </div>

            <div className={isWin ? 'winner-bg' : 'looser-bg'}>
            {
                endValue && (
                    <PopupEnd
                        message={endValue}
                        onClick={() => handleRestart()}
                        word={word}
                        status={isWin ? "WINNER!" : "LOOSER!"}
                    />
                )
            }
            </div>
        </div>
    )
}
