import React, { useState } from 'react'
import '../App.css'

export const Rest = () => {

  const [numberone, setNumberOne] = useState("");
  const [numbertwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  const restFunction = () => {

    let result = Number(numberone) - Number(numbertwo);
    console.log(result);
    setResult(result);
  }

  const cleanData = () => {

    setNumberOne("");
    setNumberTwo("");
    alert("Los inputs de resta were cleaned correctly.");
  }

  return (
    <div className='input__container'>

      <input type="number" value={numberone} 
        onChange={e => setNumberOne(e.target.value)} 
      />
      <input type="number" value={numbertwo}
        onChange={e => setNumberTwo(e.target.value)} 
      />
      <button
        type='submit'
        onClick={restFunction}
      >
        Rest both numbers
      </button>
      <button
        type='reset'
        className='btn__reset'
        onClick={cleanData}
      >
        Reset
      </button>

      <div className="result">
        <strong>The rest is:</strong> {result}
      </div>
    </div>
  )
  
}
