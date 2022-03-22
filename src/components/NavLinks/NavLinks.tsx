import './styles.css';
import { Link } from 'react-router-dom';
import { checkActiveRouteCSS } from './helpers';

const NavLinks = () => {
  return (
    <ul className="link-list">
      <Link to="/home">
        <li className={`link-list__link ${checkActiveRouteCSS('/home')}`}>
          Home
        </li>
      </Link>
      <li className={`link-list__link ${checkActiveRouteCSS('/tvshows')}`}>
        TV Shows
      </li>
      <li className={`link-list__link ${checkActiveRouteCSS('/movies')}`}>
        Movies
      </li>
    </ul>
  );
};

export { NavLinks };
