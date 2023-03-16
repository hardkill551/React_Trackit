import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import Login from "./style.js"
export default function LoginPage(){
    return (
        <Login>
        <img src={Logo} alt="Logo"/>
        <input data-test="email-input" placeholder="email"/>
        <input data-test="password-input"placeholder="senha"/>
        <button data-test="login-btn">Entrar</button>
        <Link to="/cadastro" data-test="signup-link">
        <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </Login>

    )
}
