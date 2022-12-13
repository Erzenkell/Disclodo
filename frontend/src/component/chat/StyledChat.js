import styled from  'styled-components' ;

export const StyledChat = styled.input`
    width: 85%;
    height: 5%;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #40444A;
    color: white;
    font-size: 16px;
    padding: 20px;
    box-sizing: border-box;
    position: fixed;
    top: 92%;
    left: 11%;
    z-index: 11;
`

export const StyledRemoveMessageButton = styled.button`
    background: url(https://w7.pngwing.com/pngs/374/900/png-transparent-computer-icons-christian-cross-icon-design-christian-cross.png) no-repeat center center;
    background-color: black;
    background-size: cover;
    border: none;
    cursor: pointer;
    margin-left: auto;
    &:hover {
        border: 1px solid #091B4B;
    }
    position: absolute;
    margin-top: 1%;
    right: 7%;
    width: 20px;
    height: 20px;
`