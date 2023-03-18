import styled from "styled-components";

export const CreatedHabit = styled.div`
  width: 340px;
  height: 91px;
  background-color: white;
  margin-top: 20px;
  border-radius: 5px;
  padding: 18px;
  position: relative;
  > div {
    display: flex;
  }
  p {
    font-size: 18px;
    color: #666666;
  }

  ion-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
  }
`;

export const MyHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  button {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border: 0px;
    border-radius: 5px;
    color: white;
    font-size: 20px;
  }
`;
export const CreateHabit = styled.div`
  width: 340px;
  height: 180px;
  background-color: white;
  margin-top: 20px;
  border-radius: 5px;
  padding: 18px;
  position: relative;

  button div {
    position: absolute;
    bottom: 0;
  }
  div {
    position: absolute;
    right: 16px;
    bottom: 15px;
    display: flex;
  }
  div button:first-child {
    height: 35px;
    width: 84px;
    background-color: white;
    color: #52b6ff;
    font-size: 16px;
    border: 0px;
  }
  div button:nth-child(2) {
    height: 35px;
    width: 84px;
    background-color: #52b6ff;
    color: white;
    font-size: 16px;
    border: 0px;
    border-radius: 5px;
  }
`;
export const Habit = styled.div`
  h1 {
    display: inline;
  }

  > p {
    margin-top: 17px;
    font-size: 18px;
    color: #666666;
  }
`;
