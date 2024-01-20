import React, { useState } from 'react'

export const SquareRoot = () => {

  const [numberone, setNumberOne] = useState("");
  const [numbertwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  const squareFunction = () => {

    if (numberone == numbertwo) {

      let result = Number(numberone) * Number(numbertwo);

      console.log(result);
      setResult(result);
    } else {
      console.log("Los valores introducidos no coinciden para ejecutarse la raíz cuadrada.");
    }
  }

  const cleanData = () => {

    setNumberOne("");
    setNumberTwo("");
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
        onClick={squareFunction}
      >
        Execute both numbers
      </button>
      <button
        type='reset'
        className='btn__reset'
        onClick={cleanData}
      >
        Reset
      </button>

      <div className="result">
        <strong>The square root is:</strong> {result}
      </div>
    </div>
  )

}
