import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes";
import { AppStore } from "../redux/store";

export const AuthGuard = () => {
    const userState = useSelector((store : AppStore) => store.user); // Vamos a obtener el state del usuario, para ver si esta logeado, por que si lo esta significa que el Login funciono.
    return userState.id ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>;

}

//AuthGuard es algo que se va a ejecutar cada vez que se trate de ingresar a una ruta, entonces va ir al Store, se va a fijar si existe el User

export default AuthGuard;