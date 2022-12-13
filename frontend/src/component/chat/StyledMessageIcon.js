import styled from  'styled-components' ;

export const StyledMessageIcon = styled.div`
    height: 55px;
    width: 55px;
    border-radius: 50px;
    background-color: #1E1E1E;
    background-image: url(${props => props.icon});
    background-size: cover;
    position: absolute;
    left: 10%;
`