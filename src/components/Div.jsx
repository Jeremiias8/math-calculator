import React, { useState } from 'react'

export const Div = () => {

  const [numberone, setNumberOne] = useState("");
  const [numbertwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  const divFunction = () => {

    let result = Number(numberone) / Number(numbertwo);

    if (result % 1 === 0) {
      console.log(result);
      setResult(result);
    } else {
      console.log("El result de la división no es un número entero. Result: " 
      + result);
    }
  }

  const cleanData = () => {

    setNumberOne("");
    setNumberTwo("");
    alert("Los inputs de división were cleaned correctly.");
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
        onClick={divFunction}
      >
        Divide both numbers
      </button>
      <button
        type='reset'
        className='btn__reset'
        onClick={cleanData}
      >
        Reset
      </button>

      <div className="result">
        <strong>The division is:</strong> {result}
      </div>
    </div>
  )

}
