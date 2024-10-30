import { useState } from 'react'
import './App.css'

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)


  return (
    <>
      <div className='description'>
      <h1 className='title'>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the options below.
      </p>

      </div>
      


      <div className='options'>
        
        <button onClick={() => setGood(good + 1)}>
          Good {good}
        </button>

        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral {neutral}
        </button>
        
        <button onClick={() => setBad(bad + 1)}>
          Bad {bad}
        </button>
        <button onClick={() => {
            setGood(0);
            setNeutral(0);
            setBad(0);
        }}>
            Reset
        </button>
        
      </div>
      <p className='feedback'>
        No feedback yet
        {/* change to total of the clicks 
        

        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)

        const totalFeedback = good + neutral + bad

        Math.round((good / totalFeedback) * 100)

        */}
      </p>
    </>
  )
}

export default App
