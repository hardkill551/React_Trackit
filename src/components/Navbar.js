import { useContext } from "react"
import styled from "styled-components"
import { UrlContext } from "../ContextAPI/ContextUser"


export default function NavBar(){
    const {url} = useContext(UrlContext)

    return(
        <Nav>
            <p data-test="header">TrackIt</p>
            <img src={url} alt="UserImg"/>
        </Nav>
    )
}

const Nav=styled.div`
width:100vw;
height:70px;
display:flex;
background-color:#126BA5;
padding-left:18px;
padding-right:18px;
justify-content:space-between;
align-items:center;
position:fixed;
top:0px;
left:0px;

p{
    font-family: 'Playball', cursive;
    font-weight:400;
    font-size:40px;
    color:white;
}
img{
    border-radius:50%;
    width:51px;
    height:51px;
}
`
