import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

export default function Inside({logado}) {
  console.log(logado)
  if(logado.length!==1){
  return (
    <BrowserRouter>
    <Background>
      <NavBar />
      <Routes>
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<History />} />
      </Routes>
      <Footer />
      </Background>
    </BrowserRouter>
  );
}
}
const Background = styled.div`
background-color:#F2F2F2;
margin-top:70px;
margin-bottom:70px;
`