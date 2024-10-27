import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, secondary = false }) => {
  return (
    <button className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool
}

export default Button
