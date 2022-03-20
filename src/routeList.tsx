import { RouteType } from './components/Routes/Routes.types';
import { Home } from './containers/Home';
import { Program } from './containers/Program';

export const RouteList: Array<RouteType> = [
  {
    pathName: '/home',
    component: <Home />,
    description: 'Back to home page',
  },
  {
    pathName: '/program',
    component: <Program />,
    description: 'View program details',
  },
];
