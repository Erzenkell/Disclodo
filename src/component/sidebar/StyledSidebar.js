import styled from  'styled-components' ;

export const StyledSidebar = styled.div`
    width: 100px;
    height: 100%;
    position: fixed;
    overflow: scroll;
    background-color: #36393E;
    webkit-scrollbar: none;
`

export const StyledSidebarHeader = styled.header`
    box-sizing: border-box;
    height: 90px;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledSidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`

