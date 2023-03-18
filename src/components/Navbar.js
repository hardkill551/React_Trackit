import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../ContextAPI/ConxtextUser";

export default function NavBar() {
  const { picture } = useContext(UserContext);
  return (
    <Nav data-test="header">
      <p>TrackIt</p>
      <img src={picture} alt="UserImg" />
    </Nav>
  );
}

const Nav = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  background-color: #126ba5;
  padding-left: 18px;
  padding-right: 18px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;

  p {
    font-family: "Playball", cursive;
    font-weight: 400;
    font-size: 40px;
    color: white;
  }
  img {
    border-radius: 50%;
    width: 51px;
    height: 51px;
  }
`;
