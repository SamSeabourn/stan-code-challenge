import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { NavLinks } from '../NavLinks';

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <img
          className="logo"
          src={logo}
        />
      </Link>
      <NavLinks />
    </div>
  );
};

export { Header };
