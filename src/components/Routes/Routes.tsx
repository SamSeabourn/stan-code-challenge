import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from '../../containers/Home';

import { IRoutesProps } from './Routes.types';

const Routes = ({ routesList }: IRoutesProps) => {
  return (
    <>
      <Router>
        <ul>
          {routesList.map((r, i) => {
            return (
              <li>
                <Link to={r.pathName}>{r.pathName}</Link>
              </li>
            );
          })}
        </ul>

        <Switch>
          {routesList.map((r, i) => (
            <Route key={`route-${i}`} path={r.pathName}>
              {r.component}
            </Route>
          ))}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export { Routes };
