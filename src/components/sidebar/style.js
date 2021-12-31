import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
width:300px;
height:100vh;
min-height: 800px;
background-color:#f5f3f4;
padding-top:80px;

`
export const Item = styled.div`
display:flex;
color:black;
&:nth-child(3){
color:red;
}
`

export const Title = styled.p`
margin-left:15px;

`