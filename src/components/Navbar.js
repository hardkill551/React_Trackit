import styled from "styled-components"

export default function NavBar(){
    return(
        <Nav>
            <p data-test="header">TrackIt</p>
            <img src="https://yt3.googleusercontent.com/ytc/AL5GRJWF9DhK1icziCNSd-0dyRCDbOU3_op5GLtFSJo0WA=s900-c-k-c0x00ffffff-no-rj"/>
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
