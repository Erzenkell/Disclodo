import React from 'react';
import { StyledHeader } from './StyledHeader';
import { StyledDisconnectButton } from './StyledDisconnectButton';

const Header = ({user}) => {
    const handleDisconnect = () => {
        sessionStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <StyledHeader>
            <h1>{user?.name ? user.name : user.username}</h1>
            <StyledDisconnectButton onClick={handleDisconnect}/>
        </StyledHeader>
    )
}

export default Header;