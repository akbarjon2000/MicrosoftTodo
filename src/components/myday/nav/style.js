import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import { Colors } from '../../../constants/constants';
export const Container = styled.div`
width:100%;
${'' /* height:${pxToRem(100)}; */}
padding:12px 16px 0;
${'' /* margin-bottom:100px; */}

.header{
width:100%;
height:100px;
display:flex;
align-items:center;
justify-content:center;
}
.nav > h3{
    color:${Colors.textcolor};
    font-weight:300px;
}

.menuIcon{
width:40px;
height:40px;
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

.arrows{
color:${Colors.textcolor};
height:30px;
width:70px;
}

.suggestions{
color:${Colors.textcolor};
height:30px;
width:120px;
}
.arrows:hover{
    background-color:${Colors.grey}
}
.suggestions:hover{
    background-color:${Colors.grey}
}
`
export const AddMenu = styled.div`
min-height:${pxToRem(56)};
background-color:${Colors.grey};
border-radius:5px;
padding:0 8px;
padding-top:8px;
border:1px solid rgb(235,235,235);

.input{
    width:100%;
    border:none;
    outline:none;
    height:${pxToRem(40)};
    background-color:${({ active }) => active ? "#fafafa" : "transparent"};
    padding:0 10px;
    box-shadow:${({ active }) => active ? "0 -17px 0 -16px #465efc inset !important" : "none"} ;
}

.alarm{
    justify-content:space-between;
    padding-left:25px;
    min-height:50px;
}
.add{
    color:#c2c2c2;
    font-weight:500;
    cursor:pointer;
}
`