import { Route as RouteType } from './types';
import { Home } from './containers/Home';
import { Error } from './containers/Error';
import { Program } from './containers/Program';

export const RouteList: Array<RouteType> = [
  {
    pathName: '/home',
    component: <Home />,
  },
  {
    pathName: '/program/:id',
    component: <Program />,
  },
  {
    pathName: '/error',
    component: <Error />,
  },
  {
    pathName: '/',
    component: <Home />,
  },
];
