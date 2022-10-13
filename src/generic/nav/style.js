import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';
import { Colors } from '../../constants/constants';

const media = {
    phone: "@media(max-width:360px)",
    tablet: "@media(max-width:720px)",
    desktop: "@media(max-width:900px)"
}


export const Container = styled.div`
width:100%;
padding:12px 16px 0;

${media.phone}{
    padding:0;
}
.header{
width:100%;
height:${pxToRem(100)};
display:flex;
align-items:center;
justify-content:center;
${media.desktop}{
    padding:0;
height:${pxToRem(80)};

}
${media.phone}{
    padding:0;
height:${pxToRem(70)};

}
}
.nav > h3{
    color:${({ category }) => category == "My Day" ? Colors.textcolor : category == "Tasks" ? "#7A45BF" : Colors.blue};
    font-weight:500;
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
    margin-left:${pxToRem(10)};

}
.dotsCon:hover{
    background-color:${Colors.grey}
}

.arrows{
color:${Colors.textcolor};
height:30px;
width:70px;
${media.desktop}{
    width:30px;
}
}

.suggestions{
color:${Colors.textcolor};
height:30px;
width:120px;
${media.desktop}{
    width:30px;
}
}
.arrows:hover{
    background-color:${Colors.grey}
}
.suggestions:hover{
    background-color:${Colors.grey}
}
.navText{
    ${media.desktop}{
        display:none;
     
    }
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
    ::placeholder{
        
        color:${({ category }) => (category !== "My Day" && category !== "Tasks") ? Colors.blue : category == "Tasks" ? "#7A45BF" : null};
    }
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
.date{
    display:none;
}
.modalSelector{
    width:fit-content;
    height:${pxToRem(32)};
    padding:${pxToRem(3)} 0;
    background-color:#fafafa;
    display:flex;
    align-items:center;
    padding-right:5px;
    border:1px solid rgba(200,200,200,1);
    border-radius:7%;
    margin-right:${pxToRem(8)};
}
.modalIcon{
    width:${pxToRem(25)};
    height:${pxToRem(25)};
    &:hover{
    background-color:rgba(200,200,200,0.3);
    }
    border:none;
    border-radius:20%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin:0;
    padding:0;
    margin-right:${pxToRem(8)};

}
`
export const UnderLine = styled.div`
    margin: 0 24px 0;
    flex:1;
    background: linear-gradient(180deg, white, white 52px, #e5e5e5 52px, #e5e5e5 52px);
    background-size: 100% 53px;
    box-shadow: inset 0 1px 0 0 #e5e5e5;

`

export const ListOptionsModal = styled.div`
width:${pxToRem(200)};
height:fit-content;
background-color:white;
position:absolute;
display:${({ listOptions }) => listOptions ? "column" : "none"};
border:1px solid rgb(230,230,230);
border-radius:${pxToRem(2)};
box-shadow:2px 2px 2px 1px rgba(200,200,200,0.2);
top:${pxToRem(120)};
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
.printList{
    height:${pxToRem(40)};
    padding:${pxToRem(5)};
    cursor: pointer;
     &:hover{
        background-color:${Colors.grey};
    }
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
left:${pxToRem(200)};
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
left:${pxToRem(240)};
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
