import { Link } from "react-router-dom";

export default function LoginPage(){
    return (
        <>
        <img></img>
        <h1>TrackIt</h1>
        <input placeholder="email"></input>
        <input placeholder="senha"></input>
        <button>Entrar</button>
        <Link>
        <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </>

    )
}