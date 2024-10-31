import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, secondary = false, href, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href); // Navega a la ruta especificada
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
