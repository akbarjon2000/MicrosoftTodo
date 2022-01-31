import styled from 'styled-components';
import { Colors } from '../../constants/constants';
import { pxToRem } from '../../utils/pxToRem';

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:row;
.underlines{
    margin: 0 24px 0;
    flex:1;
    background: linear-gradient(180deg, white, white 52px, #e5e5e5 52px, #e5e5e5 52px);
    background-size: 100% 53px;
    box-shadow: inset 0 1px 0 0 #e5e5e5;
}

.searchHead{
margin:${pxToRem(25)};
font-size:${pxToRem(45)};
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
`