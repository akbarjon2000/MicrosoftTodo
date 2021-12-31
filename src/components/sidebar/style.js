import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
width:300px;
height:100vh;
min-height: 800px;
background-color:#f5f3f4;
padding-top:100px;

`
export const Item = styled.div`
display:flex;
color:black;
:nth-child(2n){
    margin-top:20px;
}
`

export const Title = styled.p`
margin-left:15px;

`