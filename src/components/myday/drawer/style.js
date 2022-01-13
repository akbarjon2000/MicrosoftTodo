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
position:sticky;
top:0;
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


background-color:#fff;
padding: 0 10px 2px;
display:flex;
flex-direction:column;
.innerDiv{
    width:100%;
height: ${pxToRem(42)};
display:flex;
align-items:center;
justify-content:space-between;
}

.input{
    width:80%;
    border:none;
    outline:none;
    height:${pxToRem(25)};
    padding-left:${pxToRem(10)};
    

}
input::-webkit-input-placeholder{
color:${({ active }) => active ? "black" : Colors.blue};
font-size:13px;
}
.circle{
    width:${pxToRem(15)};
    height:${pxToRem(15)};
border-radius:50%;
border: 1px solid rgb(150,150,150);
margin-left:${pxToRem(5)}
}

.add{
    color:#c2c2c2;
    font-weight:500;
    cursor:pointer;
    font-size:12px;
}
`

export const AddMyDay = styled.div`

width:95%;
height:${pxToRem(52)};
display:flex;
align-items:center;
justify-content:space-between;
margin:${pxToRem(10)} 0;
padding:0 ${pxToRem(8)};
background-color:white;
color:${({ myDay }) => myDay ? Colors.blue : Colors.greyTextColor};
border:1px solid rgb(230,230,230);
&:hover{
    background-color:${Colors.grey}
}
`

export const Remind = styled.div`
width:100%;
height:${pxToRem(52)};
background-color:white;
display:flex;
align-items:center;
padding:0 ${pxToRem(8)};

&:hover{
    background-color:${Colors.grey}
}
.iconContainer{

    height:${pxToRem(52)};

}
.text{
    margin-left:${pxToRem(15)};
    color:${Colors.greyTextColor};
}
.close{
    color:${Colors.greyTextColor};
}
`