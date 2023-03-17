import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Lexend Deca', sans-serif;
    font-weight:400;
    box-sizing:border-box;
}
body{
    font-family: 'Lexend Deca', sans-serif;
    font-weight:400;
}
input{
    width:303px;
    height:45px;
    border-radius:5px;
    border:1px solid #D4D4D4;
    margin-bottom:6px;
    font-size:20px;
    padding-left:11px;
    
}
input:disabled{
    background-color:#F2F2F2;
}
button:disabled{
    opacity:0.7;
}
input::placeholder{
    color:#DBDBDB;
}
a{
    text-decoration:none;
}
`;



export default GlobalStyle;
