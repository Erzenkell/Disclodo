import styled from  'styled-components' ;

export const StyledIcon = styled.div`
    height: 55px;
    width: 55px;
    border-radius: 50px;
    background-color: #2F3136;
    background-image: url(${props => props.icon});
    background-size: cover;
    cursor: pointer;
    position: relative;
    z-index: 9;
`

export const StyledIconPopup = styled.div`
    position: fixed;
    z-index: 10;
    margin-top: -50px;
    margin-left: 60px;
    padding: 10px;
    background-color: #2F3136;
`
