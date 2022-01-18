import styled from "styled-components";
import { Colors } from "../../../constants/constants";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
border-radius:2px;
height:${pxToRem(52)};
&:hover{
background-color:${({ taskIsActive }) => taskIsActive ? "#f4f6ff" : Colors.grey};
}
background-color:${({ taskIsActive }) => taskIsActive ? "#f4f6ff" : "white"};
padding:8px;
margin-left:16px;
margin-right:16px !important;
display:flex;
align-items:center;
justify-content:space-between;
cursor: pointer;


.text{
 font-size:${pxToRem(12)}
}
`