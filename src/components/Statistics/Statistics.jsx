const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p>Statistics</p>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback {positivePercentage}%</p>
  </>
);

export default Statistics;
