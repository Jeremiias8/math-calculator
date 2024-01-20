import React, { useState } from 'react'

export const Multiplication = () => {

  const [numberone, setNumberOne] = useState("");
  const [numbertwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  const multFunction = () => {

    let result = Number(numberone) * Number(numbertwo);
    console.log(result);
    setResult(result);
  }

  const cleanData = () => {

    setNumberOne("");
    setNumberTwo("");
    alert("Los inputs de multiplicación were cleaned correctly.");
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
        onClick={multFunction}
      >
        Multiplique both numbers
      </button>
      <button
        type='reset'
        className='btn__reset'
        onClick={cleanData}
      >
        Reset
      </button>

      <div className="result">
        <strong>The multiplication is:</strong> {result}
      </div>
    </div>
  )
  
}
