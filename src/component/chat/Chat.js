import React from 'react';

import { StyledChat } from './StyledChat';

const Chat = ({user}) => {
    const onEnterKeyPressed = (e, msg, user) => {
        if (e.key === 'Enter') {
            console.log(`message send to ${user.name}: `, msg);
        }
    }

    return (
        <StyledChat placeholder={`Send a message to @${user?.name}`} onKeyDown={e => onEnterKeyPressed(e, e.target.value, user)}/>
    )
}

export default Chat;