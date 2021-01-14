import React, { useState } from 'react'
import './QCard.css'



export default function QCard() {

    let questions = [
        {
            question: 'What type of skin/coat do you have?',
            options:['Fur', 'Scales', 'Feathers']
        },
        {
            question: 'What color is your fur?',
            options:['Brown', 'White', 'Black']
        },
        {
            question: 'Do you bark?',
            options:['Yes', 'No']
        },
        {
            question: 'What Are You?' ,
            options:[]          
        },
        {
            question: 'Do you live on land or water?',
            options:['Water', 'Land']
        },
        {
            question: 'Are you a fish?',
            options:['Yes', 'No']
        },
        {
            question: 'do you fly?',
            options:['Yes', 'No']
        },
        {
            question: 'What size are you?',
            options:['Small', 'Large']
        },
        {
            question: 'Are you a Penguin?',
            options:['Yes', 'No']
        },
        {
            question: 'Are you a Black Bear?',
            options:['Yes', 'No']
        },
        {
            question: 'Thats Awesome!!',
            options:[]
        },
        {
            question: 'Are you a Rabbit?',
            options:['Yes', 'No']
        },
        {
            question: 'Are you an Eagle?',
            options:['Yes', 'No']
        },
        {
            question: 'Are you a Lizard?',
            options:['Yes', 'No']
        },

        
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const  [previousQuestion] = useState([0])

    function back() {
        if(previousQuestion.length > 1){
            
            setCurrentQuestion(previousQuestion[previousQuestion.length - 1]) 
            previousQuestion.pop();
        }
    }

    function reset(){
        setCurrentQuestion(0)
    }

    let updateQ = () => {
        previousQuestion.push(currentQuestion)
        
        if(currentQuestion === 0){
            setCurrentQuestion(1)
        }
        if(currentQuestion === 1  ){
            setCurrentQuestion(2)
        }
        if(currentQuestion === 2 ){
            setCurrentQuestion(3)
        }       
        if(currentQuestion === 4 ){
            setCurrentQuestion(5)
        }
        if(currentQuestion === 9 ){
            setCurrentQuestion(10)
        }
        if(currentQuestion === 11 ){
            setCurrentQuestion(10)
        }
        if(currentQuestion === 5 ){
            setCurrentQuestion(10)
        }
        if(currentQuestion === 8 ){
            setCurrentQuestion(10)
        }
        if(currentQuestion === 6 ){
            setCurrentQuestion(12)
        }
        if(currentQuestion === 8 ){
            setCurrentQuestion(10)
        }
        if(currentQuestion === 12 ){
            setCurrentQuestion(10)
        }
        if(currentQuestion === 13 ){
            setCurrentQuestion(10)
        }

    }

    let updateQ2 = () => {
        previousQuestion.push(currentQuestion)
        
        if(currentQuestion === 0){
            setCurrentQuestion(4)
        }
     
        if(currentQuestion === 5 ){
            setCurrentQuestion(3)
        }
        if(currentQuestion === 2 ){
            setCurrentQuestion(3)
        }
        if(currentQuestion === 9 ){
            setCurrentQuestion(3)
        }
        if(currentQuestion === 11 ){
            setCurrentQuestion(3)
        }
        if(currentQuestion === 1 ){
            setCurrentQuestion(11)
        }
        if(currentQuestion === 6 ){
            setCurrentQuestion(8)
        }
        if(currentQuestion === 8 ){
            setCurrentQuestion(3)
        }
        if(currentQuestion === 12 ){
            setCurrentQuestion(3)
        }
        if(currentQuestion === 4 ){
            setCurrentQuestion(13)
        }
        if(currentQuestion === 13 ){
            setCurrentQuestion(3)
        }

    }

    let updateQ3 = () => {
        previousQuestion.push(currentQuestion)
        
        if(currentQuestion === 1){
            setCurrentQuestion(9)
        }
        if(currentQuestion === 0){
            setCurrentQuestion(6)
        }
   
    }

    return (
        <>
        <p>GUESS WHO</p>
        <div className='card'>
            
            <h1 className='card__question'>{questions[currentQuestion].question}</h1>
            {/* {questions[currentQuestion].options.map((option,index) =>{
                return  <button className='card__btn' key={index}>
                            <h2>{option}</h2>
                        </button>
            })} */}
            
            
            {questions[currentQuestion].options[0] ?
                 <button className='card__btn' onClick={updateQ}>
                <h2>{questions[currentQuestion].options[0]}</h2>
            </button>: ''}
            {questions[currentQuestion].options[1] ?
                 <button className='card__btn' onClick={updateQ2} >
                <h2>{questions[currentQuestion].options[1]}</h2>
            </button>: ''}
            {questions[currentQuestion].options[2] ?
                 <button className='card__btn' onClick={updateQ3}>
                <h2>{questions[currentQuestion].options[2]}</h2>
            </button>: ''}
            {/* {currentQuestion === 4 ? <h1>IDK</h1>: ''} */}
            <div>

                {currentQuestion === 0 ? '' : <button className='card__btn__back' onClick={back}>
                    <h2>back</h2></button> }
                {currentQuestion === 0 ? '' : <button className='card__btn__back' onClick={reset}>
                    <h2>reset</h2></button> }
                
            </div>
           
        </div>
    </>
    )
}