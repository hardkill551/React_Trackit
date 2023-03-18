import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

export default function Inside({ logado, token }) {
  if (logado === true) {
    return (
      <BrowserRouter>
        <NavBar />
        <Background>
          <Routes>
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </Background>
        <Footer />
      </BrowserRouter>
    );
  }
}
const Background = styled.div`
  background-color: #f2f2f2;
  margin-top: 70px;
  margin-bottom: 70px;
  height: 100%;
  min-height: calc(100dvh - 140px);
  padding: 28px 17px;
  padding-bottom: 50px;

  h1 {
    color: #126ba5;
    font-size: 23px;
  }
`;
