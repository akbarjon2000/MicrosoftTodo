import styled from 'styled-components';
import { Colors } from '../../../constants/constants';
import { pxToRem } from '../../../utils/pxToRem';

export const Container = styled.div`
min-width:${pxToRem(370)};
min-height:${pxToRem(1000)};    
background-color:${Colors.grey};
display:${({ drawerIsActive }) => drawerIsActive ? "flex" : "none"};
flex-direction:column;
align-items:center;
${'' /* display:none; */}
overflow-y:scroll;

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
export const DueDate = styled(Remind)`

`
export const Repeat = styled(Remind)`

`
export const Category = styled.div`
background-color:white;
width:95%;
height:${pxToRem(52)};
margin: ${pxToRem(10)} 0;
border: 1px solid rgb(230,230,230);
align-items:center;
padding:0 ${pxToRem(8)};
.categoryInput{
    height:50px;
    width:200px;
    border:none;
    outline:none;
    ::placeholder{
        font-size:15px;
        color:${Colors.greyTextColor};
    }
    padding-left:${pxToRem(10)};
}
.dataList{
   background-color:red;
}

`

export const AddFile = styled(Remind)`
width:95%;
margin-bottom:${pxToRem(10)};
border: 1px solid rgb(230,230,230);

`

export const Editor = styled.div`
width:95%;
height:${pxToRem(93)};
background-color:white;
padding:${pxToRem(15)};
border: 1px solid rgb(230,230,230);
&:hover{
border:1px solid rgb(200,200,200);
}
${'' /* margin-bottom:auto; */}

.textArea{
    min-height: ${pxToRem(30)};
border:none;
outline:none;
width:100%;
}
`

export const Close = styled.div`
width:100%;
height:${pxToRem(45)};
background-color:${Colors.grey};
border-top: 1px solid #eaeaea;
${'' /* border-top:1px solid green; */}
display:flex;
align-items:center;
justify-content:space-between;
padding: 5px 15px;
text-rendering: optimizeLegibility;
position:sticky;
bottom: 0;
.close{
    width:${pxToRem(30)};
    height:${pxToRem(30)};
    cursor: pointer;
    &:hover{
        background-color:white;
border-radius:4px;
    }
}
.delete{
   width:${pxToRem(30)};
    height:${pxToRem(30)};
    cursor: pointer;
    &:hover{
        background-color:white;
border-radius:4px;
    } 
}
.text{
    color:${Colors.textcolor};
    font-size:${pxToRem(12)};
}
`

export const Modal1 = styled.div`
width:${pxToRem(200)};
height:fit-content;
background-color:white;
position:absolute;
display:${({ modal1 }) => modal1 ? "column" : "none"};
border:1px solid rgb(230,230,230);
border-radius:${pxToRem(2)};
box-shadow:2px 2px 2px 1px rgba(200,200,200,0.2);
${'' /* left:${pxToRem(200)}; */}
z-index:1000;


.title{
width: 100%;
height: ${pxToRem(42)};
border-bottom: 1px solid rgba(200, 200, 200);
color:${Colors.greyTextColor};
font-weight:600;
}
.dateInfo{
    width:100%;
    height:${pxToRem(36)};
    justify-content:space-between;
    padding:0 ${pxToRem(8)};
    cursor: pointer;
    &:hover{
        background-color:${Colors.grey};
    }
}
.removeDate{
    padding:0 ${pxToRem(8)};
    cursor: pointer;
    height:${pxToRem(50)};
border-top: 1px solid rgba(200, 200, 200);

      &:hover{
        background-color:${Colors.grey};
    }
}
`

export const Modal2 = styled.div`
width:${pxToRem(200)};
height:fit-content;
background-color:white;
position:absolute;
display:${({ modal2 }) => modal2 ? "column" : "none"};
border:1px solid rgb(230,230,230);
border-radius:${pxToRem(2)};
box-shadow:2px 2px 2px 1px rgba(200,200,200,0.2);
${'' /* left:${pxToRem(240)}; */}
z-index:1000;


.title{
width: 100%;
height: ${pxToRem(42)};
border-bottom: 1px solid rgba(200, 200, 200);
color:${Colors.greyTextColor};
font-weight:600;
}
.dateInfo{
    width:100%;
    height:${pxToRem(36)};
    justify-content:space-between;
    padding:0 ${pxToRem(8)};
    cursor: pointer;
    &:hover{
        background-color:${Colors.grey};
    }
}
.nextWeek{
    width:${pxToRem(17)};
    height:${pxToRem(17)};
    border:1px solid;
    border-radius:50%;
    margin-left:${pxToRem(3)};
}
.removeDate{
    padding:0 ${pxToRem(8)};
    cursor: pointer;
    height:${pxToRem(42)};
border-top: 1px solid rgba(200, 200, 200);

      &:hover{
        background-color:${Colors.grey};
    }
}
`

export const Modal3 = styled.div`
width:${pxToRem(200)};
height:fit-content;
background-color:white;
position:absolute;
display:${({ modal3 }) => modal3 ? "column" : "none"};
border:1px solid rgb(230,230,230);
border-radius:${pxToRem(2)};
box-shadow:2px 2px 2px 1px rgba(200,200,200,0.2);
left:inherit;
z-index:1000;


.title{
width: 100%;
height: ${pxToRem(42)};
border-bottom: 1px solid rgba(200, 200, 200);
color:${Colors.greyTextColor};
font-weight:600;
}
.dateInfo{
    width:100%;
    height:${pxToRem(36)};
    justify-content:space-between;
    padding:0 ${pxToRem(8)};
    cursor: pointer;
    &:hover{
        background-color:${Colors.grey};
    }
}
.removeDate{
    padding:0 ${pxToRem(8)};
    cursor: pointer;
    height:${pxToRem(50)};
border-top: 1px solid rgba(200, 200, 200);

      &:hover{
        background-color:${Colors.grey};
    }
}
`