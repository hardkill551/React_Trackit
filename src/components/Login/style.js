import styled from "styled-components";

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-bottom: 33px;
  }
  button {
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 5px;
    color: white;
    font-size: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    margin-bottom: 25px;
  }
  a {
    color: #52b6ff;
    font-size: 14px;
  }
`;

export default Login;
