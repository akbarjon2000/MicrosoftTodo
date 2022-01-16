import styled from 'styled-components';
import { Colors } from '../../../../constants/constants';
import { pxToRem } from '../../../../utils/pxToRem';

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:${Colors.grey};
height:100vh;
width:100%;
.body{
    width:${pxToRem(450)};
    height:${pxToRem(350)};
    background-color:white;
display:flex;
flex-direction:column;
padding:${pxToRem(50)};

}

.logo{
    width:${pxToRem(110)}
}
.singinText{
    font-size:${pxToRem(23)};
    font-weight:500;
    margin-top:${pxToRem(15)};
}

.input{
    border:none;
    outline:none;
    border-bottom:1px solid;
    height:${pxToRem(30)};
    margin-top:${pxToRem(10)};

}
.link{
    color:${Colors.blue};
    border-bottom:1px solid white;
    width:fit-content;
    font-size:${pxToRem(14)};
    &:hover{
        border-bottom:1px solid ${Colors.blue};
    }
}

.buttons{
margin-left:auto;
margin-top:auto;
    ${'' /* width:100%; */}
}
.backBtn{
    width:${pxToRem(100)};
    height:${pxToRem(32)};
    margin-right:${pxToRem(4)};
    color:black;
    background-color:rgba(210,210,210,1);
    border:none;
    outline:none;
}
.nextBtn{
    width:${pxToRem(100)};
    height:${pxToRem(32)};
    margin-right:${pxToRem(4)};
    background-color:${Colors.blue};
    color:white;
    border:none;
    outline:none;
}
`