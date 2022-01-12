import styled from 'styled-components';
import { Colors } from '../../../constants/constants';
import { pxToRem } from '../../../utils/pxToRem';

export const Container = styled.div`
width:50%;
height:100vh;
background-color:${Colors.grey};
display:flex;
flex-direction:column;
align-items:center;
${'' /* display:none; */}
`

export const AddStep = styled.div`
width:95%;
margin-top:2.5%;
height: ${pxToRem(55)};
background-color:#fff;
padding: 0 10px 2px;
.circle{
    width:${pxToRem(20)};
    height:${pxToRem(20)};
border-radius:50%;
color:${Colors.blue};
border: 1px solid ${Colors.blue};
}
.input{
    width:80%;
    border:none;
    outline:none;
    height:${pxToRem(25)};
    padding-left:${pxToRem(10)};
    &:hover{
        background-color: ${Colors.grey};
    }
}
`
export const Steps = styled.div`
width:95%;
margin-top:2.5%;
height: ${pxToRem(42)};
background-color:#fff;
padding: 0 10px 2px;
`