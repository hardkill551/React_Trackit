import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import axios from "axios";
import base_url from "../../constants/url_base";
import { useContext } from "react";
import { UserContext } from "../../ContextAPI/ConxtextUser";
export default function Habit({ h }) {
  const { config} = useContext(UserContext);
  return (
    <TodayHabit data-test="today-habit-container" done={h.done} sequence={h.currentSequence} highest={h.highestSequence}>
      <div>
        <h3 data-test="today-habit-name">{h.name}</h3>
        <p data-test="today-habit-sequence">Sequência atual: <span>{h.currentSequence} dias</span></p>
        <p data-test="today-habit-record">Seu recorde: <span>{h.highestSequence} dias</span></p>
      </div>
      <button data-test="today-habit-check-btn" onClick={() => check()}>
        <BsCheck />
      </button>
    </TodayHabit>
  );
  function check() {
    if (h.done === false) {
      const promise = axios.post(
        `${base_url}habits/${h.id}/check`,
        null,
        config
      );
      promise.then();
      promise.catch();
    } else {
      const promise = axios.post(
        `${base_url}habits/${h.id}/uncheck`,
        null,
        config
      );
      promise.then();
      promise.catch();
    }
  }
}

const TodayHabit = styled.div`
  background-color: white;
  width: 340px;
  height: 94px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: ${(props) => (props.done ? "#8FC549" : "#EBEBEB")};
    border: 1px solid ${(props) => (props.done ? "#8FC549" : "#E7E7E7")};
    border-radius: 5px;
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 69px;
  }
  p:nth-child(2) span{
    color:${(props) => (props.done ? "#8FC549" : "#666666")};
  }
  p:nth-child(3) span{
    color:${(props) => (props.highest===props.sequence&&props.sequence>0 ? "#8FC549" : "#666666")};
  }
`;
