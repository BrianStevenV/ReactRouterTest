import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import { PrivateRoutes, PublicRoutes } from './routes'
import { AuthGuard } from './guards'
import RoutesWithNotFound from './utilities/routes-with-not-found'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Logout from './components/Logout/Logout'

const Login= lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  return (
    <Suspense fallback={<>Loading</>} > {/*EL suspense sabe que adentro hay Lazy Loading, entonces si algun compo se tarda en cargar, va a agarrar y va a querer lo que sea adentro*/}
      <Provider store={store}> {/*El Provider va a proveedor esta {} informacion a toda la aplicacion*/}
        <BrowserRouter>
          <Logout/> {/*No es necesario aplicarle Lazy al Logout*/}
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>} />
            <Route path='*' element={<>Not Found</>} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard/>}> {/*Se va a ejecutar AuthGuard en todas las rutas que se encuentren en su interior*/}
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route> 
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export default App;
