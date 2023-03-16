import styled from "styled-components"

export default function Footer(){
    return(
        <Foot>
            <p>Hábitos</p>
            <div>
                <p>Hoje</p>
            </div>
            <p>Histórico</p>
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
color:#52B6FF;

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