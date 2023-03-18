import { useEffect, useState } from "react";
import { Habit, MyHabits, CreateHabit, CreatedHabit } from "./style";
import Days from "./Days";
import styled from "styled-components";
import axios from "axios";
import base_url from "../../constants/url_base";
import { ThreeDots } from "react-loader-spinner";

export default function Habits({ token }) {
  const [weekdays, setWeekdays] = useState(["D", "S", "T", "Q", "Q", "S", "S"]);
  const [selectedDay, setSelectedDay] = useState({ name: "", days: [] });
  const [create, setCreate] = useState(false);
  const [habits, setHabits] = useState([]);
  const [disable, setDisable] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${base_url}habits`, config)
      .then((res) => setHabits(res.data))
      .catch((err) => console.log(err.response.data));
  }, [habits, setHabits]);
  return (
    <Habit>
      <MyHabits>
        <h1>Meus Hábitos</h1>
        <button data-test="habit-create-btn"
          onClick={() => {
            setCreate(!create);
            setDisable(false);
          }}
        >
          +
        </button>
      </MyHabits>
      {create ? (
        <CreateHabit data-test="habit-create-container">
          <input data-test="habit-name-input"
            value={selectedDay.name}
            onChange={(e) =>
              setSelectedDay({ ...selectedDay, name: e.target.value })
            }
            placeholder="nome do hábito"
            disabled={disable}
          ></input>
          {weekdays.map((d, i) => (
            <Days
              key={i}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              i={i}
              day={d}
              disable={disable}
            />
          ))}
          <div>
            <button data-test="habit-create-cancel-btn" onClick={() => {
            setCreate(false);
          }}>Cancelar</button>
            <button data-test="habit-create-save-btn" onClick={() => post()} disabled={disable}>{disable ? <ThreeDots color="white" height={35} width={55}/> : <p>Entrar</p>}</button>
          </div>
        </CreateHabit>
      ) : null}

      {habits.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        habits.map((a) => (
          <CreatedHabit data-test="habit-container">
            <p data-test="habit-name">{a.name}</p>
            <ion-icon data-test="habit-delete-btn" name="trash-outline" onClick={() => del(a)}></ion-icon>
            <div>
              {weekdays.map((d, i) => (
                <Day data-test="habit-day" key={i} array={a.days} i={i}>
                  {d}
                </Day>
              ))}
            </div>
          </CreatedHabit>
        ))
      )}
    </Habit>
  );

  function del(a) {
    if (window.confirm("Deseja deletar o hábito?")) {
      const promise = axios.delete(`${base_url}habits/${a.id}`, config);
      promise.then((res) => console.log(res.data));
      promise.catch((err) => console.log(err.response.data));
    }
  }

  function post() {
    setDisable(true);
    const promise = axios.post(`${base_url}habits`, selectedDay, config);
    promise.then((res) => {
      console.log(res.data);
      setCreate(false);
      setSelectedDay({ name: "", days: [] });
    });
    promise.catch((res) => {
      alert(res.response.data.message)
      setDisable(false)
    });
    
  }
}

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-top: 8px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  font-size: 20px;
  color: ${(a) => (a.array.includes(a.i) ? "white" : "#DBDBDB")};
  background-color: ${(a) => (a.array.includes(a.i) ? "#CFCFCF" : "white")};
  margin-right: 4px;
`;
