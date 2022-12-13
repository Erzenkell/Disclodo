import React, {useEffect, useState} from 'react';
import { StyledChat, StyledRemoveMessageButton } from './StyledChat';
import { StyledMessageIcon } from './StyledMessageIcon';

import './Chat.css'

const defaultIcon = "https://files.cults3d.com/uploaders/16080059/illustration-file/b5ee5801-0527-4e6f-9c16-95d0af5c61cd/Kirbo.png"

const Chat = ({currentUser, currentChannel}) => {
    const [messageList, setMessageList] = useState([]);

    const onEnterKeyPressed = (e, msg, channel) => {
        if (e.key === 'Enter') {
            fetch('http://localhost:5678/api/Message', {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "content": msg,
                    "authorId": currentUser.id,
                    "channelId": channel.id
                  })
            })
                 .then(document.getElementById("chatbar").value = "")
                 .then(setMessageList([...messageList,
                   {
                    "content": msg,
                    "author": currentUser.username,
                    "channelId": channel.id,
                    "createdAt": JSON.stringify(new Date())
                    }])
                 )
                 .then(window.scrollTo(0, 0))
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5678/api/Message/${currentChannel?.id}`, {
            method: 'GET',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json()) // parse JSON from request
            .then(data => { setMessageList(data.reverse()); return })
            .catch((err) => {
                console.log(err.message);
            });
    }, [currentChannel]);

    const handleRemoveMessage = (message) => {
        fetch(`http://localhost:5678/api/Message/${message.id}`, {
            method: 'DELETE',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.text())
            .then(setMessageList(messageList.filter((cmessage) => cmessage.id !== message.id)))
            .catch((err) => {
                console.log(err.message);
            });
    }

    console.log(messageList)

    return (
        <div>
            <div className='message-list'>
                {messageList?.map((message) => {
                    return (
                        <div className="message">
                            <div className="message-content">
                                <StyledMessageIcon icon={defaultIcon} />
                                <div className="message-send">
                                    {message.author}
                                    <div className='message-time'>
                                        &nbsp;&nbsp;{message.createdAt}
                                    </div>
                                </div>
                                <div className="message-text">
                                    {message.content}
                                </div>
                                <StyledRemoveMessageButton onClick={() => handleRemoveMessage(message)}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='footer'>
                <StyledChat id="chatbar" placeholder={`Send a message to @${currentChannel?.name}`} onKeyDown={e => onEnterKeyPressed(e, e.target.value, currentChannel)}/>
            </div>
        </div>
    )
}

export default Chat;