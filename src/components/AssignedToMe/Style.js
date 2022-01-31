import styled from 'styled-components';
import { Colors } from '../../constants/constants';
import { pxToRem } from '../../utils/pxToRem';

export const Container = styled.div`
   width:100%;
   height:100vh;
   padding:12px 16px 0;
   .menuIcon{
width:${pxToRem(40)};
height:${pxToRem(40)};
font-weight:300;
color:white;
background-color:transparent;
border:none;
outline:none;
cursor:pointer;
display:${({ hide }) => hide ? "" : "none"};

}
.dotsCon{
    width:${pxToRem(40)};
    height:${pxToRem(40)};
    margin-left:${pxToRem(10)}
}
.dotsCon:hover{
    background-color:${Colors.grey}
}
h3{
    color:#408266;
    font-weight:500;
    font-size:${pxToRem(20)};
}
.assignIcon{
    width:${pxToRem(250)};
    height:${pxToRem(250)};
    margin-top:auto;
}
.text{
    color:#767678;
    font-size:${pxToRem(20)};
    width:${pxToRem(382)};
    text-align:center;
}
`