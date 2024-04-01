import { useNavigate } from "react-router-dom";
import { UserKey, resertUser } from "../../redux/states/user";
import { clearLocalStorageUser } from "../../utilities";
import { PublicRoutes } from "../../routes";
import { useDispatch } from "react-redux";

function Logout() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    clearLocalStorageUser(UserKey);
    dispatch(resertUser());
    navigate(PublicRoutes.LOGIN, {replace: true});
  };

  return (
    <button onClick={logOut}>Logout</button>
  )
}
export default Logout;

// Context es para compartir informacion de manera simple, rEdux es para compartir informacion que se utiliza en todos lados
// El context es una canal de comunicacion por donde va a fluir la comunicacion.
// EL Context no debe llegar a ser un Manager


//Rxjs es un observable, observable es algo de JS, is Reactive Programming
