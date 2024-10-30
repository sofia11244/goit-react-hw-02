import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [feedback, setFeedback] = useState(() => ({
    good: Number(localStorage.getItem("good")) || 0,
    neutral: Number(localStorage.getItem("neutral")) || 0,
    bad: Number(localStorage.getItem("bad")) || 0,
  }));

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const percentageFeedback = feedback.good + feedback.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / percentageFeedback) * 100) : 0;

  const updateFeedback = (feedbackType) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  useEffect(() => { //her bir geri bildirim durumu değiştiğinde yerel depolamayı güncellemek için
    localStorage.setItem("good", feedback.good);
    localStorage.setItem("neutral", feedback.neutral);
    localStorage.setItem("bad",feedback.bad);
  }, [feedback]);

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("good");
    localStorage.removeItem("neutral");
    localStorage.removeItem("bad");
  };
  

  return (
    <>                  
      <div className='description'>
      <h1 className='title'>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
      </div>
      
      <div className='options'>
        
        <button onClick={() => updateFeedback("good")}>
          Good {feedback.good}
        </button>

        <button onClick={() => updateFeedback("neutral")}>
          Neutral {feedback.neutral}
        </button>

        <button onClick={() => updateFeedback("bad")}>
          Bad {feedback.bad}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className='feedback'>
        <ul className='feedback-items'>
          <li>Good: {feedback.good}</li>
          <li>Neutral: {feedback.neutral} </li>
          <li>Bad: {feedback.bad}</li>
          {totalFeedback === 0 ? 
          <li> No feedback yet</li>
            : (
            <>
              <li>Total feedback: {totalFeedback} </li>
              <li> Positive feedback: {positivePercentage}%</li>
            </>
            )}
          </ul>
        </div>
      </>
    )
  }

export default App
