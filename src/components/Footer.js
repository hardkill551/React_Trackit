import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <Foot data-test="menu">
            <Link data-test="habit-link" to="/habitos">
            <p>Hábitos</p>
            </Link>
            <Link data-test="today-link"to="/hoje">
            <div>
                <span>Hoje</span>
            </div>
            </Link>
            <Link data-test="history-link"to="/historico">
            <p>Histórico</p>
            </Link>
        </Foot>
    )
}

const Foot = styled.div`
width:100vw;
height:70px;
position:fixed;
bottom:0px;
left:0px;
display:flex;
justify-content:space-around;
align-items:center;

p{
    color:#52B6FF;
}
div{
    width:91px;
    height:91px;
    border-radius:50%;
    background-color:#52B6FF;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:40px;
}
`