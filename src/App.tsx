import { Layout } from './components/Layout';
import { Routes } from './components/Routes';
import { RouteList } from './routeList';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes routesList={RouteList} />
      </Layout>
    </div>
  );
};

export { App };
