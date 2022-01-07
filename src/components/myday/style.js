import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
.underlines{
        margin: 0 24px;
    flex: 1;
    background: linear-gradient(180deg, white, white 52px, #e5e5e5 52px, #e5e5e5 52px);
    background-size: 100% 53px;
    box-shadow: inset 0 1px 0 0 #e5e5e5;
}
.nav{
    display:flex;
    align-items:center;
}

`