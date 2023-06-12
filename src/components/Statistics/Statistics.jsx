import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={css.title}>Statistics</p>
    <p className={css.feed}>Good: {good}</p>
    <p className={css.feed}>Neutral: {neutral}</p>
    <p className={css.feed}>Bad: {bad}</p>
    <p className={css.feed}>Total: {total()}</p>
    <p className={css.feed}>Positive feedback {positivePercentage()}%</p>
  </>
);

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
