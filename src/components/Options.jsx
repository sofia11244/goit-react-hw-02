import PropTypes from 'prop-types';
export default function Options({ feedback, updateFeedback, handleReset }) {    

return(
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
);

      
}

Options.propTypes = {
    feedback: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
    updateFeedback: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
  };