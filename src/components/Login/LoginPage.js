import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Login from "./style.js";
import base_url from "../../constants/url_base";
import { ThreeDots } from "react-loader-spinner";
import { UserContext } from "../../ContextAPI/ConxtextUser";


export default function LoginPage({ setLogado, setToken }) {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>setLogado([{}]),[])
  const {setPicture} = useContext(UserContext)

  return (
    <Login>
      <img src={Logo} alt="Logo" />
      <form onSubmit={enter}>
        <input
          type="email"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          data-test="email-input"
          placeholder="email"
          disabled={disable}
          required
        />
        <input
          type="password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          data-test="password-input"
          placeholder="senha"
          disabled={disable}
          required
        />
        <button type="submit" data-test="login-btn" disabled={disable}>
          {disable ? <ThreeDots color="white" /> : <p>Entrar</p>}
        </button>
      </form>
      <Link to="/cadastro" data-test="signup-link">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Login>
  );

  function enter(e) {
    e.preventDefault();
    setDisable(true);
    const promise = axios.post(`${base_url}auth/login`, login);
    promise.then((res) => {
      setLogado(true);
      console.log(res.data)
      setToken(res.data.token)
      setPicture(res.data.image)
      navigate("/hoje");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setDisable(false);
    });
  }
}
