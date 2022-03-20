import { Header } from '../Header';
import './styles.css';

import { ILayoutProps } from './Layout.types';

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="mainContainer">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
