import React from 'react'
import Figure from './Figure';
import { Word } from './Word';

export const Main = () => {


    return (
        <div className='Main'>
            <div className="gameContainer">
                <Word />
                {/* 17e error show figure */}
            </div>
        </div>
    )
}

export default Main;