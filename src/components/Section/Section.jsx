import PropTypes from 'prop-types';
import css from './Section.module.css';
const Section = ({ title, children }) => (
  <section className={css.container}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  // children: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
};
