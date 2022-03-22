import { RouteList } from './RouteList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Route as RouteType } from './types';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Switch>
            {RouteList.map((r: RouteType, i) => (
              <Route
                key={`route-${i}`}
                path={r.pathName}
                exact
              >
                {r.component}
              </Route>
            ))}
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export { App };
