import styled from "styled-components";
import { Colors } from "../../../constants/constants";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
${'' /* width:97.7%; */}
height:${pxToRem(52)};
&:hover{
background-color:${Colors.grey};
}

padding:8px;
margin-left:16px;
margin-right:16px !important;
display:flex;
align-items:center;
justify-content:space-between;


.star{
    
 stroke:white;
    color:white;
}

.text{
 font-size:${pxToRem(12)}
}
`