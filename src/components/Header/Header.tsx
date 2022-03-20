import './styles.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <div className="navBar">
      <img src={logo} />
    </div>
  );
};

export { Header };
