import { useDispatch } from "react-redux";
import { getMorty } from "../../services";
import { createUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../routes";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result)); // De esta manera enviamos al login el resultado del API y lo tememos al storage.
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});

    } catch (error) {
      console.log('Error');
    }
    

    
  };
  return (
    <div>
      <h1>Hi, this is my Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;