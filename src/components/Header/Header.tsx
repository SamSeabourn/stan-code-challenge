import './styles.css';
import logo from '../../images/logo.svg';
import { NavLinks } from '../NavLinks';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navBar">
      <Link to="/home">
        <img className="logo" src={logo} />
      </Link>
      <NavLinks />
    </div>
  );
};

export { Header };
