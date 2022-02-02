import styled from "styled-components";
import { Colors } from "../../constants/constants";
import { pxToRem } from "../../utils/pxToRem";
export const Nav = styled.div`
height:${pxToRem(48)};
width:100%;
background-color:${Colors.blue};
display:flex;
align-items:center;
justify-content:space-between;
.search{
    
    width:${pxToRem(400)};
    height:${pxToRem(32)};
    border-radius:${pxToRem(3)};
    outline:none;
    border:none;
    background-color: ${Colors.lightblue};
    cursor: pointer;
    &:hover{
        background-color:white;
    }
}
.searchbtn{
   width:${pxToRem(40)};
   height:100%;
   &:hover{
       background-color:white;
   }
    border-radius:${pxToRem(3)};
   cursor: pointer;
}
.searchInput{
    width:100%;
    height:100%;
    border:none;
    outline:none;
    background-color:inherit;
    padding-left:${pxToRem(10)};
    padding-right:${pxToRem(10)};
display:${({ show }) => show ? "" : "none"};

}
.iconbtn{
    width:48px;
    height:48px;
    color:white !important;
    fill:#fff;
    background-color:transparent;
    border:none;
    outline:none;
    &:hover{
        background-color:${Colors.lightblue}
    }
}

.iconbtn > span{
 height: 16px;
    width: 16px;
    border-radius: 8px;
    background-color: #004578;
    color: white;
    position: absolute;
    top: 8px;
    right:4.5%;
    font-size: 12px;
    display:flex;
    align-items:center;
    justify-content:center;
}

`

export const SignOutModal = styled.div`
width:${pxToRem(100)};
height:${pxToRem(30)};
border:1px solid;
display:${({ showSignOut }) => showSignOut ? "flex" : "none"};
align-items:center;
padding:${pxToRem(5)};
gap:${pxToRem(5)};
position:absolute;
z-index:1000;
right:0;
border:1px solid rgba(200,200,200,1);
background-color:rgb(220,220,220);

`