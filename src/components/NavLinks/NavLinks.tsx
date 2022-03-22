import './styles.css';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const checkActiveRouteCSS = (pathName: string) => {
    if (pathName === '') pathName = '/home';
    return useLocation().pathname === pathName ? 'link active' : 'link';
  };

  return (
    <ul className="linkList">
      <Link to="/home">
        <li className={checkActiveRouteCSS('/home')}>Home</li>
      </Link>
      <li className={checkActiveRouteCSS('/shows')}>TV Shows</li>
      <li className={checkActiveRouteCSS('/movies')}>Movies</li>
    </ul>
  );
};

export { NavLinks };
