import { Link } from "react-router-dom"
import Login from "./style.js"
import Logo from "../../assets/Logo.png"
import { useState } from "react"
import base_url from "../../constants/url_base.js"
import axios from "axios"

export default function SignUp(){
    const [sign, setSign] = useState({email:"", name:"",  image:"", password:""})
    console.log(sign)
    return (
        <Login>
            <img src={Logo} alt="Logo"/>
            <input value={sign.email} onChange={(e)=>setSign({...sign, email:e.target.value})} data-test="email-input" placeholder="email"/>
            <input value={sign.password} onChange={(e)=>setSign({...sign, password:e.target.value})} data-test="password-input"placeholder="senha"/>
            <input value={sign.name} onChange={(e)=>setSign({...sign, name:e.target.value})} data-test="user-name-input" placeholder="nome"/>
            <input value={sign.image} onChange={(e)=>setSign({...sign, image:e.target.value})} data-test="user-image-input"placeholder="foto"/>
            <button onClick={()=>{
                const promise = axios.post(`${base_url}auth/sign-up`, sign)
                promise.then((res) => console.log(res.data))
                promise.catch((err) => console.log(err.response.data))
            }
            } data-test="signup-btn">Cadastrar</button>
            <Link data-test="login-link" to="/">
            <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Login>
    )
}

