import React from 'react';
import { StyledSidebar, StyledSidebarHeader, StyledSidebarContent } from './StyledSidebar';
import Icon from '../icon/Icon';

import './Sidebar.css'

const Sidebar = ({handler, channelList, currentUser}) => {
    return (
        <StyledSidebar>
            <StyledSidebarHeader>
                <Icon channel={currentUser} handler={handler}/>
            </StyledSidebarHeader>
            <StyledSidebarContent className="sidebar-content">
                {channelList ?
                channelList?.map((channel) => {
                    return (
                        <Icon channel={channel} handler={handler}/>
                    )
                }): null}
            </StyledSidebarContent>
        </StyledSidebar>
    )
}

export default Sidebar;