import PropTypes from 'prop-types';

export default function Feedback( { feedback, totalFeedback, positivePercentage } ) {
    return (
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
    );
}

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};