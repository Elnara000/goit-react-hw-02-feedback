import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.container}>
    <button className={css.btn} type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button className={css.btn} type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button className={css.btn} type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
