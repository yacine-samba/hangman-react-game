import React, { createContext, useState, useEffect } from 'react';
import { get, set } from "../services/localeStorage";

const LangContext = createContext({ lang: 'fr-FR', toggleLang: () => {} });

const LangContextProvider = ({ children }) => {
    
    const [lang, setLang] = useState(get('lang') === 'fr-FR' || get('lang') === 'en-GB' ? get('lang') : 'fr-FR');

    const toggleLang = () => {
        if (lang === 'fr-FR') {
            setLang('en-GB');
        } else {
            setLang('fr-FR');
        }
    }

    useEffect(() => {
        set('lang', lang);
    }, [lang])

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangContextProvider };