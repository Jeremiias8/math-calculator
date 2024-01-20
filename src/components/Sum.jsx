import React, { useState } from 'react'
import '../App.css'

export const Sum = () => {

  const [numberone, setNumberOne] = useState("");
  const [numbertwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  const sumFunction = () => {

    let result = Number(numberone) + Number(numbertwo);
    console.log(result);
    setResult(result);
  }

  const cleanData = () => {

    setNumberOne("");
    setNumberTwo("");
    alert("Los inputs de suma were cleaned correctly.");
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
        onClick={sumFunction}
      >
        Sum both numbers
      </button>
      <button
        type='reset'
        onClick={cleanData}
        className='btn__reset'
      >
        Reset
      </button>

      <div className="result">
        <strong>The sum is:</strong> {result}
      </div>
    </div>
  )
  
}
