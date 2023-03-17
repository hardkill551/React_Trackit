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
      <form onSubmit={register}>
        <input
          type="email"
          value={sign.email}
          onChange={(e) => setSign({ ...sign, email: e.target.value })}
          data-test="email-input"
          placeholder="email"
          disabled={disable}
          required
        />
        <input
          type="password"
          value={sign.password}
          onChange={(e) => setSign({ ...sign, password: e.target.value })}
          data-test="password-input"
          placeholder="senha"
          disabled={disable}
          required
        />
        <input
          type="text"
          value={sign.name}
          onChange={(e) => setSign({ ...sign, name: e.target.value })}
          data-test="user-name-input"
          placeholder="nome"
          disabled={disable}
          required
        />
        <input
          type="url"
          value={sign.image}
          onChange={(e) => setSign({ ...sign, image: e.target.value })}
          data-test="user-image-input"
          placeholder="foto"
          disabled={disable}
          required
        />
        <button type="submit" data-test="signup-btn" disabled={disable}>
          {disable ? <ThreeDots color="white" /> : <p>Cadastrar</p>}
        </button>
      </form>
      <Link data-test="login-link" to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Login>
  );

  function register(e) {
    e.preventDefault();
    setDisable(true);
    const promise = axios.post(`${base_url}auth/sign-up`, sign);
    promise.then(() => navigate("/"));
    promise.catch((err) => {
      alert(err.response.data.message);
      setDisable(false);
    });
  }
}
