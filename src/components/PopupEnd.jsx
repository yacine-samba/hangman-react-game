import React, { useContext } from 'react'
import { LangContext } from "../context/langContext";

export const PopupEnd = ({ message, onClick, word, status  }) => {

    const { lang } = useContext(LangContext);

    let messageAffiche = "Error";
    if (message === 'win') {
        lang === 'fr-FR' ? messageAffiche = 'Vous avez été suspendu au bord de la défaite, mais vous avez réussi à sauver notre ami à la dernière minute !' : messageAffiche = 'You win GG'
    }
    if (message === 'loose') {
        lang === 'fr-FR' ? messageAffiche = 'Le pendu a pris une décision fatale. Mais vous pouvez toujours revenir plus fort et gagner la prochaine fois !' : messageAffiche = 'You loose try again'
    }

    return (
        <div className="popupEnd">
            <p>{status}</p>
            <h2>{word}</h2>
            <h3>{messageAffiche}</h3>
            <button className="btn" onClick={onClick}>
                {
                    lang === 'fr-FR' ? 'Recommencer' : 'Restart'
                }
            </button>
        </div>
    )
}

export default PopupEnd;