import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

function Menu(){
    const {realizarLogout} = useLogin();
return(
<nav className="menu">
    <p>
        <Link to="/" className="botao-menu">
        Home
        </Link>
        <Link to="/login" className="botao-menu">
        Login
               </Link>
        <Link to="/login" className="botao-menu"
        onClick={realizarLogout}>
        Sair
       </Link>

            </p>
</nav>
);

}

export default Menu