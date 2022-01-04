import { Route, Switch } from "shared/components";
import routes from "./routes";

interface IRoutes {
  path: string;
  name: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  isProtected?: boolean;
}

const Routes: React.FC = () => {
  const renderRoutes = ({ component, path, exact, isProtected }: IRoutes) => {
    return (
      <Route path={path} component={component} key={path} exact={!!exact} />
    );
  };

  return <Switch>{routes.map(renderRoutes)}</Switch>;
};

export default Routes;