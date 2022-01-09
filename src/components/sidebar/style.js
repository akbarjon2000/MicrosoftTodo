import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem"
export const Container = styled.div`
display: ${({ hide }) => hide ? "none" : "flex"};
flex-direction:column;
width:${pxToRem(300)} !important;
height:100vh;
min-height: 800px;
background-color:#f5f3f4;


.menuIcon{
margin-top: ${pxToRem(25)};
margin-bottom: ${pxToRem(25)};
margin-left: ${pxToRem(10)};
width:40px;
height:40px;
font-weight:300;
color:white;
background-color:transparent;
border:none;
outline:none;
cursor:pointer;
}
.menuIcon:hover{
    background-color:rgb(249,249,249);
    border:2px solid rgb(235,235,240);
}

`
export const Item = styled.div`
display:flex;
color:black;
&:nth-child(3){
color:red;
}
`

export const Title = styled.p`
margin-left:15px;

`