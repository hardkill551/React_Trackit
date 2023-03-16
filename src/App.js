import LoginPage from "./components/Login/LoginPage";
import SignUp from "./components/Login/SignUpPage";
import Inside from "./components/Inside";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [logado, setLogado] = useState(true)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    <Inside logado={logado}/>
    </>
  );
}

export default App;
