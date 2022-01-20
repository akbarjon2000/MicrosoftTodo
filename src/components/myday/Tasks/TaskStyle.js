import styled from "styled-components";
import { Colors } from "../../../constants/constants";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
border-radius:2px;
height:${pxToRem(52)};
&:hover{
background-color:${({ taskIsActive }) => taskIsActive ? "#f4f6ff" : Colors.grey};
}
// background-color:${({ taskIsActive }) => taskIsActive ? "#f4f6ff" : "white"};
padding:8px;
margin-left:16px;
margin-right:16px !important;
display:flex;
align-items:center;
justify-content:space-between;
cursor: pointer;
box-shadow: inset 0 1px 0 0 #e5e5e5;

.text{
 font-size:${pxToRem(12)}
}
`
export const RighClickMenu = styled.div`
max-height:${pxToRem(592)};
width:${pxToRem(237)};
background-color:#fff;
box-shadow:0 0 6px rgba(0,0,0,0.2);
overflow: hidden auto;
position: fixed;
border-radius: 2px;
padding: 6px 0;
top:${({ clientY }) => clientY + "px"};
left:${({ clientX }) => clientX + "px"};

.section{
padding:0 8px 0 4px;
color:#34373d;
height:${pxToRem(32)};
&:hover{
        background-color: rgba(234, 234, 234, 0.5);
}
margin-bottom:6px;
}

`