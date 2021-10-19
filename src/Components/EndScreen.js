import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBank'

const EndScreen = () => {
    const {score, setScore, setGameState} = useContext(QuizContext)
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu")
    }
    return (
        <div className= "EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
            <button>Restart Quiz</button>
        </div>
    )
}

export default EndScreen
