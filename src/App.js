import LoginPage from "./components/Login/LoginPage";
import SignUp from "./components/Login/SignUpPage";
import Inside from "./components/Inside";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [logado, setLogado] = useState([{}])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setLogado={setLogado}/>}/>
        <Route path="/cadastro" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    <Inside logado={logado}/>
    </>
  );
}

export default App;
