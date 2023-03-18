import styled from "styled-components";
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { UserContext } from "../ContextAPI/ConxtextUser";

export default function Footer() {
    const {progressbar} = useContext(UserContext)
  return (
    <Foot data-test="menu">
      <Link data-test="habit-link" to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link data-test="today-link" to="/hoje">
        <div>
          <CircularProgressbar
            value={progressbar}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
                pathColor:"white",
                textColor: "white",
                trailColor: "#52b6ff",
                backgroundColor:"#52b6ff",
            })}
          />
        </div>
      </Link>
      <Link data-test="history-link" to="/historico">
        <p>Histórico</p>
      </Link>
    </Foot>
  );
}

const Foot = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index:1;
  background-color:white;
  p {
    color: #52b6ff;
  }
  div {
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
  }

  
`;
