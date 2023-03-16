import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import Login from "./style.js"
import base_url from "../../constants/url_base";

export default function LoginPage({setLogado}){
    const [login, setLogin] = useState({email:"",password:""})
    const navigate=useNavigate()
    return (
        <Login>
        <img src={Logo} alt="Logo"/>
        <input value={login.email} onChange={(e) => setLogin({...login, email:e.target.value})} data-test="email-input" placeholder="email"/>
        <input value={login.password} onChange={(e) => setLogin({...login, password:e.target.value})} data-test="password-input"placeholder="senha"/>
        <button onClick={()=>{
            const promise = axios.post(`${base_url}auth/login`, login)
            promise.then((res) => {
                setLogado(res.data)
                navigate("/habitos")
            })
            promise.catch((err) => console.log(err.response.data))
        }} data-test="login-btn">Entrar</button>
        <Link to="/cadastro" data-test="signup-link">
        <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </Login>

    )
}
