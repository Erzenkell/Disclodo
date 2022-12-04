import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { StyledSidebar, StyledSidebarHeader, StyledSidebarContent } from './StyledSidebar';
import Icon from '../icon/Icon';

import './Sidebar.css'

const Sidebar = ({handler, usersList, currentUser}) => {
    return (
        <StyledSidebar>
            <StyledSidebarHeader>
                <Icon user={currentUser} handler={handler}/>
            </StyledSidebarHeader>
            <StyledSidebarContent className="sidebar-content">
                {usersList?.map((user) => {
                    return (
                        <Icon user={user} handler={handler}/>
                    )
                })}
            </StyledSidebarContent>
        </StyledSidebar>
    )
}

export default Sidebar;