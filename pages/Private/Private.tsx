import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../routes";
import RoutesWithNotFound from "../../utilities/routes-with-not-found";
import { lazy } from 'react';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE}/>} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path="*" element={<>NOT FOUND </>} />
    </RoutesWithNotFound>
  );
}
export default Private;

// -> cuando hacemos Lazy? En el componente padre de cada Ruta.