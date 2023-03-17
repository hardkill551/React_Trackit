import { Link, useNavigate } from "react-router-dom";
import Login from "./style.js";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import base_url from "../../constants/url_base.js";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const [sign, setSign] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  return (
    <Login>
      <img src={Logo} alt="Logo" />
      <input
        value={sign.email}
        onChange={(e) => setSign({ ...sign, email: e.target.value })}
        data-test="email-input"
        placeholder="email"
        disabled={disable}
      />
      <input
        value={sign.password}
        onChange={(e) => setSign({ ...sign, password: e.target.value })}
        data-test="password-input"
        placeholder="senha"
        disabled={disable}
      />
      <input
        value={sign.name}
        onChange={(e) => setSign({ ...sign, name: e.target.value })}
        data-test="user-name-input"
        placeholder="nome"
        disabled={disable}
      />
      <input
        value={sign.image}
        onChange={(e) => setSign({ ...sign, image: e.target.value })}
        data-test="user-image-input"
        placeholder="foto"
        disabled={disable}
      />
      <button
        onClick={() => {
            setDisable(true)
          const promise = axios.post(`${base_url}auth/sign-up`, sign);
          promise.then(() => navigate("/"));
          promise.catch((err) => {
            alert(err.response.data.message);
            setDisable(false)
          });
        }}
        data-test="signup-btn"
        disabled={disable}
      >
        {disable ? <ThreeDots color="white" /> : <p>Cadastrar</p>}
      </button>
      <Link data-test="login-link" to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Login>
  );
}
