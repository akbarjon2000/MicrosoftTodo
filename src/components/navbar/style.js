import styled from "styled-components";
import { Colors } from "../../constants/constants";
import { pxToRem } from "../../utils/pxToRem";
export const Nav = styled.div`
height:${pxToRem(48)};
width:100%;
background-color:${Colors.blue};
display:flex;
align-items:center;
justify-content:space-between;
input{
    width:${pxToRem(400)};
    height:${pxToRem(32)};
    border-radius:${pxToRem(3)};
    outline:none;
    border:none;
    background-color: ${Colors.lightblue};
}
.iconbtn{
    width:48px;
    height:48px;
    color:white !important;
    fill:#fff;
    background-color:transparent;
    border:none;
    outline:none;
}
.iconbtn > span{
 height: 16px;
    width: 16px;
    border-radius: 8px;
    background-color: #004578;
    color: white;
    position: absolute;
    top: 8px;
    right:4.5%;
    font-size: 12px;
    display:flex;
    align-items:center;
    justify-content:center;
}

`