import { Link } from "react-router-dom"
import Login from "./style.js"
import Logo from "../../assets/Logo.png"

export default function SignUp(){
    return (
        <Login>
            <img src={Logo}/>
            <input data-test="email-input" placeholder="email"/>
            <input data-test="password-input"placeholder="senha"/>
            <input data-test="user-name-input" placeholder="nome"/>
            <input data-test="user-image-input"placeholder="foto"/>
            <button data-test="signup-btn">Cadastrar</button>
            <Link data-test="login-link" to="/">
            <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Login>
    )
}

