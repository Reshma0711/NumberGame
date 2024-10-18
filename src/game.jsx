








import React, { useState } from 'react'
import  './game.css'



const Game = () => {


    const [num,setnum]=useState(Math.floor(Math.random()*10)+1)


    const[guess,setGuess]=useState("")

    const [message,setMessage]=useState("");

    const [msgstyle,setMsgstyle]=useState("")

   const handleGuess=()=>{
     
    const userGuess=Number(guess)
    
    console.log(userGuess,num)
  

    if(isNaN(userGuess)||userGuess<1||userGuess>10){
      setMessage("Please Enter a Number Between 1 and 10.");
      setMsgstyle("error")
    }
    else if (userGuess=== num){
      setMessage("Congratulations! You guessed the correct number!");
      setMsgstyle("success")
    }
    else if(userGuess<num){
      setMessage("Guess number is too low")
      setMsgstyle("warning")
    }
    else{
      setMessage("Guess number is High")
        setMsgstyle("warning");
    }


   }



   const inputHandler=(e)=>{
            setGuess(e.target.value)
   }
    


  return (
    <div className="main">
      <h1>Guess Number</h1>
      <p>Guess a number between 1 and 10</p>
      <input
        type="number"
        min="0"
        max="10"
        className="input"
        value={guess}
        onChange={inputHandler}
        placeholder="Enter your number"
      />
      <button onClick={handleGuess}>Submit</button>
      <p className={msgstyle}>{message}</p>
    </div>
  );
}

export default Game
