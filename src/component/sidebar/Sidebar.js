import React from 'react';
import PropTypes from 'prop-types';
import { StyledSidebar, StyledSidebarHeader, StyledSidebarContent } from './StyledSidebar';
import Icon from '../icon/Icon';

const Sidebar = (usersList) => {
    return (
        <StyledSidebar>
            <StyledSidebarHeader>
                <Icon/>
            </StyledSidebarHeader>
            <StyledSidebarContent>
                {usersList.users.map((user) => {
                    return (
                        <Icon pfp={user.pfp}/>
                    )
                })}
            </StyledSidebarContent>
        </StyledSidebar>
    )
}

Sidebar.propTypes = {
    usersList: PropTypes.array
}

export default Sidebar;