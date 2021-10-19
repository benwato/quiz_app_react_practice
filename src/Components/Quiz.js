import React, {useState} from 'react'
import { useContext } from 'react/cjs/react.development';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';


const Quiz = () => {
    const {score, setScore, setGameState} = useContext(QuizContext)
    const [currentQuestion, setCurrQuestion] = useState(0); //reference to the index of array of questions, then click question button and incrememnt state by one
    const [optionChosen,setOptionChosen] = useState("")
    const nextQuestion = () => {
        if(Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1)
        }
        setCurrQuestion(currentQuestion + 1);
    }

    const finishQuiz = () => {
        if(Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1)
        }
        setGameState("endScreen")
    }
    return ( // Want to display a title for each question, then display all of the options and then at bottom a move to next question.
        <div className="Quiz"> 
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className='options'>
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion == Questions.length -1 ? 
            (<button onClick={finishQuiz}>Finish Quiz</button>) : (
            <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    )
}

export default Quiz
