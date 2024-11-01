import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button component that renders a styled button with optional navigation functionality.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} props.text - The text to display inside the button.
 * @param {boolean} [props.secondary=false] - Determines if the button should use secondary styling.
 * @param {string} [props.href] - Optional URL to navigate to when the button is clicked.
 * @returns {JSX.Element} The rendered button element.
 */
const Button = ({ text, secondary = false, href, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href); 
    }
  }

  return (
    <button 
      className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`} 
      onClick={handleClick}
      style={{...props}}
    >
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  href: PropTypes.string
}

export default Button;
