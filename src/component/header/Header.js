import React from 'react';
import { StyledHeader } from './StyledHeader';

const Header = ({user}) => {
    return (
        <StyledHeader>
            <h1>{user?.name}</h1>
        </StyledHeader>
    )
}

export default Header;