import styled from  'styled-components' ;

export const StyledIcon = styled.div`
    height: 55px;
    width: 55px;
    ${props => props.selected ? `border-radius: 15px;` : `border-radius: 50px;`}
    background-color: #36393E;
    background-image: url(${props => props.icon});
    background-size: cover;
    cursor: pointer;
    position: relative;
    z-index: 9;
    transition: 0.3s;
    &:hover {
        border-radius: 15px;
    }
`

export const StyledIconPopup = styled.div`
    position: fixed;
    z-index: 10;
    margin-top: -50px;
    margin-left: 60px;
    padding: 10px;
    background-color: #202225;
`

export const StyledIndicator = styled.div`
    position: fixed;
    margin-top: -40px;
    margin-left: -25px;
    width: 10px;
    height: 30px;
    border-radius: 50px;
    background-color: white;
    z-index: 11;
`