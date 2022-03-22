import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { NavLinks } from '../NavLinks';

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">
        <img
          className="header__logo"
          src={logo}
          alt={'Stan Logo'}
        />
      </Link>
      <NavLinks />
    </div>
  );
};

export { Header };
