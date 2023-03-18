import styled from "styled-components";

import { useContext, useEffect, useState } from "react";
import base_url from "../../constants/url_base";
import axios from "axios";
import Habit from "./Habit";
import dayjs from "dayjs";
import { UserContext } from "../../ContextAPI/ConxtextUser";
export default function Today() {
  const [habits, setHabits] = useState([]);
  const day = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
  const {config, progressbar, setProgressBar} = useContext(UserContext)

  useEffect(() => {
    axios
      .get(`${base_url}habits/today`, config)
      .then((res) => setHabits(res.data))
      .catch((err) => console.log(err.response.data));
      setProgressBar((habits.filter(a=>a.done===true).length/habits.length*100).toFixed(0))
  }, [habits,setHabits]);
  
  return (
    <WeekDay progressbar={progressbar}>
      <h1 data-test="today">{day[(dayjs().day())]}, {(dayjs().format('DD/MM'))}</h1>
      <h2 data-test="today-counter">{progressbar>0?`${progressbar}% dos hábitos concluídos`:"Nenhum hábito concluído ainda"}</h2>
      {habits.map((h, i) => (
        <Habit key={i} h={h} />
      ))}
    </WeekDay>
  );
}

const WeekDay = styled.div`
  h2 {
    font-size: 18px;
    color: ${props=>props.progressbar>0?"#8FC549":"#bababa"};
    margin-top: 5px;
    margin-bottom: 28px;
  }

  h3 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }
  p {
    font-size: 13px;
    color: #666666;
    margin-bottom: 3px;
  }
`;
