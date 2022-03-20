import { Header } from '../Header';

import { ILayoutProps } from './Layout.types';

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { Layout };
