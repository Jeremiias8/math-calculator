import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routing } from './routing/Routing'
import { Buttons } from './components/Btn/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container__logo'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <span className="main__logo">
          <h1>JF Calculator</h1>
        </span>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <header className="header__links-navbar">

        <button className="header__links-content">
          <a href="/">Home</a>
        </button>

        <Buttons />

      </header>

      <h1>Your app to operate any type of calc.</h1>

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          <code>SUM, REST, MULTIPLICATION, DIVISION & MORE</code> 
        </p>
      </div>

      <section id="section">
        
        <span className="routing__container">
            <Routing />
        </span>

      </section>

      <p className="read-the-docs">
        Easy math calculator page.
      </p>
    </>
  )
}

export default App
