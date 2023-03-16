import LoginPage from "./components/LoginPage";
import SingUp from "./components/SingUp";
import Inside from "./components/Inside";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={<SingUp />}/>
      </Routes>
    </BrowserRouter>
    <Inside />
    </>
  );
}

export default App;
