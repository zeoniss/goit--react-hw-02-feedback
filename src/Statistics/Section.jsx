import '../../index.css';
import propTypes from 'prop-types';

const Section = ({ children, title }) => (
  <section className="container">
    <h1>{title}</h1>
    {children}
  </section>
);
export default Section;

Section.propTypes = {
  title: propTypes.string.isRequired,
};
