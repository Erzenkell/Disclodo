import React from 'react';
import { StyledChat } from './StyledChat';
import { StyledMessageIcon } from './StyledMessageIcon';

import './Chat.css'

import { messageListMock } from '../../mocks/messages';

const Chat = ({selectedUser, currentUser}) => {
    const onEnterKeyPressed = (e, msg, user) => {
        if (e.key === 'Enter') {
            console.log(`message send to ${user.name}: `, msg);
        }
    }

    const getMessageListForUser = (selectedUser, currentUser) => {
        const messageListCallback = messageListMock // need to be replaced by a call to the API
        const messageList = messageListCallback.reverse()
        return messageList
    }

    const messageList = getMessageListForUser(selectedUser, currentUser);

    return (
        <div>
            <div className='message-list'>
                {messageList?.map((message) => {
                    return (
                        <div className="message">
                            <div className="message-content">
                                <StyledMessageIcon icon={message.sender?.icon} />
                                <div className="message-send">
                                    {message.sender.name}
                                    <div className='message-time'>
                                        &nbsp;&nbsp;{message.time}
                                    </div>
                                </div>
                                <div className="message-text">
                                    {message.content}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='footer'>
                <StyledChat placeholder={`Send a message to @${selectedUser?.name}`} onKeyDown={e => onEnterKeyPressed(e, e.target.value, selectedUser)}/>
            </div>
        </div>
    )
}

export default Chat;