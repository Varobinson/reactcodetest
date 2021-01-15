import React, { useState } from 'react'
import './QCard.css'
import questions from '../../data'



export default function QCard() {

    // State

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const  [previousQuestion] = useState([0])

    // Functions

    // Goes back 1 question
    function back() {
        if(previousQuestion.length > 1){
            
            setCurrentQuestion(previousQuestion[previousQuestion.length - 1]) 
            previousQuestion.pop();
        }
    }

    // Resets Form to first Question
    function reset(){
        setCurrentQuestion(0)
    }

    // Function updates currentQuestion When button 1 is clicked
    let updateQ = () => {
        previousQuestion.push(currentQuestion)
        
        if(currentQuestion === 0){
            setCurrentQuestion(1)
        }
        else if(currentQuestion === 1  ){
            setCurrentQuestion(2)
        }
        else if(currentQuestion === 2 ){
            setCurrentQuestion(3)
        }       
        else if(currentQuestion === 4 ){
            setCurrentQuestion(5)
        }
        else if(currentQuestion === 9 ){
            setCurrentQuestion(10)
        }
        else if(currentQuestion === 11 ){
            setCurrentQuestion(10)
        }
        else if(currentQuestion === 5 ){
            setCurrentQuestion(10)
        }
        else if(currentQuestion === 8 ){
            setCurrentQuestion(10)
        }
        else if(currentQuestion === 6 ){
            setCurrentQuestion(12)
        }
        else if(currentQuestion === 8 ){
            setCurrentQuestion(10)
        }
        else if(currentQuestion === 12 ){
            setCurrentQuestion(10)
        }
        else if(currentQuestion === 13 ){
            setCurrentQuestion(10)
        }

    }

// Function updates currentQuestion When button 1 is clicked
    let updateQ2 = () => {
        previousQuestion.push(currentQuestion)
        
        if(currentQuestion === 0){
            setCurrentQuestion(4)
        }
        else if(currentQuestion === 5 ){
            setCurrentQuestion(3)
        }
        else if(currentQuestion === 2 ){
            setCurrentQuestion(3)
        }
        else if(currentQuestion === 9 ){
            setCurrentQuestion(3)
        }
        else if(currentQuestion === 11 ){
            setCurrentQuestion(3)
        }
        else if(currentQuestion === 1 ){
            setCurrentQuestion(11)
        }
        else if(currentQuestion === 6 ){
            setCurrentQuestion(8)
        }
        else if(currentQuestion === 8 ){
            setCurrentQuestion(3)
        }
        else if(currentQuestion === 12 ){
            setCurrentQuestion(3)
        }
        else if(currentQuestion === 4 ){
            setCurrentQuestion(13)
        }
        else if(currentQuestion === 13 ){
            setCurrentQuestion(3)
        }

    }

    // Function updates currentQuestion When button 3 is clicked
    let updateQ3 = () => {
        previousQuestion.push(currentQuestion)
        
        if(currentQuestion === 1){
            setCurrentQuestion(9)
        }
        else if(currentQuestion === 0){
            setCurrentQuestion(6)
        }
   
    }

    return (
        <>
        <h1>GUESS WHO</h1>
        <div className='card'>
            
            <h2 className='card__question'>
                {questions[currentQuestion].question}
            </h2>
            
            {questions[currentQuestion].options[0] ?
                <button className='card__btn' 
                        onClick={updateQ}>
                    <h2>{questions[currentQuestion].options[0]}</h2>
                </button>: ''}
            {questions[currentQuestion].options[1] ?
                <button className='card__btn' 
                        onClick={updateQ2} >
                    <h2>{questions[currentQuestion].options[1]}</h2>
                </button>: ''}
            {questions[currentQuestion].options[2] ?
                <button className='card__btn' 
                        onClick={updateQ3}>
                    <h2>{questions[currentQuestion].options[2]}</h2>
                </button>: ''}
            <div>

                {currentQuestion === 0 ? '' : 
                    <button className='card__btn__option' 
                            onClick={back}>
                        <h2>back</h2>
                    </button> }
                {currentQuestion === 0 ? '' : 
                    <button className='card__btn__option' 
                            onClick={reset}>
                        <h2>reset</h2>
                    </button> }
                
            </div>
           
        </div>
    </>
    )
}