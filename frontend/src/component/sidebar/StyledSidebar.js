import styled from  'styled-components' ;

export const StyledSidebar = styled.div`
    width: 100px;
    height: 100%;
    overflow: scroll;
    background-color: #2E3136;
    ::-webkit-scrollbar {
        display: none;
    }
    position: fixed;
    z-index: 1;
`

export const StyledSidebarHeader = styled.header`
    box-sizing: border-box;
    height: 90px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledSidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    position: absolute;
    z-index: 6;
`

