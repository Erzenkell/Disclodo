import React from 'react';

import { StyledChat } from './StyledChat';

const Chat = ({user}) => {
    return (
        <StyledChat placeholder={`Send a message to @${user?.name}`}/>
    )
}

export default Chat;