import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../static/images/logo.jpg";
import Button from "../Button/Button";

const HeaderDropdown = ({ padre }) => {
  return (
    <ul className="header__nav__ul__dropdown">
      <hr className="separator" />
      <li className='header__nav__ul__dropdown__li'>
        <NavLink
          to={`/${padre}/contaminacion-del-agua`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contaminación del Agua
        </NavLink>
      </li>
      <li className='header__nav__ul__dropdown__li'>
        <NavLink
          to={`/${padre}/escasez-del-agua`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Escasez del Agua
        </NavLink>
      </li>
      <li className='header__nav__ul__dropdown__li'>
        <NavLink
          to={`/${padre}/acidificacion-de-los-oceanos`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Acidificación de los Océanos
        </NavLink>
      </li>
    </ul>
  );
};

HeaderDropdown.propTypes = {
  padre: PropTypes.string.isRequired,
};

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={Logo} alt="Brand" className="header__nav__logo" />
        <ul className="header__nav__ul">
          <li className="header__nav__ul__li">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li className="header__nav__ul__li">
            <NavLink
              to="/problemas-ambientales/contaminacion-del-agua"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PROBLEMAS AMBIENTALES
            </NavLink>
            <HeaderDropdown padre="problemas-ambientales" />
          </li>
          <li className="header__nav__ul__li">
            <NavLink
              to="/exploracion"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              EXPLORACIÓN
            </NavLink>
            <HeaderDropdown padre="exploracion" />
          </li>
        </ul>
        <section className="header__nav__buttons">
          <Button text="Sign In" secondary />
          <Button text="Register" />
        </section>
      </nav>
    </header>
  );
};

export default Header;
