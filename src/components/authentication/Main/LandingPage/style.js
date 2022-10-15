import styled from 'styled-components';
import { Colors } from '../../../../constants/constants';
import { pxToRem } from '../../../../utils/pxToRem';

export const Container = styled.div`
overflow-y:hidden;
display: flex;
justify-content:space-between;
padding:20px 100px;
margin-bottom: 0; 
width:100%;



.left__side img {

margin-top:${pxToRem(100)};
    height: 41%;
    width:300px;
}
.right__side{
width:300px;

}
.right__side img {
margin-top:${pxToRem(100)};
    height: 45%;
}
.middle__side {

    display: flex;
    align-items: center;
    flex-direction: column;

}
.middle__side--title {

    font-size: 40px;
    color: rgb(83, 78, 78);

}
.middle__side--subtitle {
    font-size: ${pxToRem(20)};
    margin-top: ${pxToRem(15)};
    width: ${pxToRem(350)};
    font-weight: 400;
    color:${Colors.textcolor};
    text-align:center;
    
}
.middle__side--img2 img {
    display: none;
    width: 300px;
}
.middle__side--button {
    border-radius: 2px;
    border: none;
    outline: none;
    background-color: #0078d4;
    color: white;
    font-size: 15px;
    font-weight: 600;
    height: ${pxToRem(50)};
    width: ${pxToRem(180)};
    margin-top:${pxToRem(50)};
    cursor:pointer;
    &:hover{
background-color:rgba(0, 120, 212, 0.9);
    }
}
.middle__side .learnMore {
    color: #0078d4;
    font-weight:400;
    margin-top:${pxToRem(15)};
    text-decoration:none;
    border-bottom: 1px solid white;
   
}
.middle__side .learnMore:hover {
    border-bottom: 1px solid #0078d4;
}
.download{
    color:${Colors.textcolor};
    font-weight:400;
    margin-top:${pxToRem(80)};
}
.middle__side--icons {
    margin-top:${pxToRem(20)};
    display: flex;
    color:#605e5c;
}
.android {
    text-decoration:none !important;
    margin-right: 10px;
    border: 1px solid #605e5c;
    padding: 0px 13px;
    border-radius: 5px;
    font-size: 30px;
    cursor:pointer;
    
}   
.android:hover {
    background-color: rgba(214, 203, 203, 0.253);
}
.windows {
    text-decoration:none !important;
    margin-right: 10px;
    border: 1px solid #605e5c;
    padding: 0px 13px;
    border-radius: 5px;
    font-size: 30px;
    cursor:pointer;
}
.windows:hover {
    background-color: rgba(214, 203, 203, 0.253);
}
    text-decoration:none !important;
.apple {
    border: 1px solid #605e5c;
    padding: 0px 13px;
    border-radius: 5px;
    font-size: 30px;
    cursor:pointer;
}
.apple:hover {
    background-color: rgba(214, 203, 203, 0.253);
}
.readme{
    text-decoration:none;
    color:${Colors.textcolor};
    margin-top:${pxToRem(30)};
    &:hover{
        border-bottom: 1px solid ${Colors.textcolor};
    }
    

}

@media(max-width: 1121px) { 

    .middle__side{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .middle__side--img2 img {
        display: block;
        width: 280px;
        margin-bottom: 25px;
    }
    .middle__side--subtitle {
        display: none;
    }
    .left__side img {
        display: none;
    }
    .right__side img {
        display: none;
    }
}

`