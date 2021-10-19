import React from 'react'
import { useContext } from 'react'
import App from '../App'
import { QuizContext } from '../Helpers/Context'
import "../App.css";

const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext) 
    return (
        <div className="Menu">
            <button onClick={() => {
                setGameState("quiz") //button changes gameState to quiz, will then start rendering quiz as gamestae changed, calling gameState function as within context provider
            }}>Start Quiz</button> 
        </div>
    )
}

export default MainMenu
