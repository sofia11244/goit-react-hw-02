import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [good, setGood] = useState(() => {
    return Number(localStorage.getItem("good")) || 0
  });

  const [bad, setBad] = useState(() => {
    return Number(localStorage.getItem("bad")) || 0
  });

  const [neutral, setNeutral] = useState(() => {
    return Number(localStorage.getItem("neutral")) || 0
  });

  const totalFeedback = good + bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;


  useEffect(() => { //her bir geri bildirim durumu değiştiğinde yerel depolamayı güncellemek için
    localStorage.setItem("good", good);
    localStorage.setItem("bad", bad);
    localStorage.setItem("neutral", neutral);
  }, [good, bad, neutral]);


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
            localStorage.removeItem("good");
            localStorage.removeItem("neutral");
            localStorage.removeItem("bad");
        }}>
            Reset
        </button>
      </div>

      <div className='feedback'>
        <ul className='feedback-items'>
          <li>Good: {good}</li>
          <li>Neutral: {neutral} </li>
          <li>Bad: {bad}</li>
          {good + neutral + bad === 0 
          ? <li> No feedback yet</li>
            : (
            <>
              <li>Total feedback: {good + neutral + bad} </li>
              <li> Positive feedback: {positivePercentage}%</li>
            </>
            )}
          </ul>
        </div>
      </>
    )
  }

export default App
