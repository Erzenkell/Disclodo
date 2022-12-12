import React, {useState, useEffect} from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Header from '../../component/header/Header';
import Chat from '../../component/chat/Chat';
import Profile from '../../component/profile/Profile';

import './dashboard.css';

const Dashboard = ({getToken}) => {

    const decodeToken = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    const token = getToken();
    console.log(token)
    const currentUser = decodeToken(token);

    const [selectedChannel, setSelectedChannel] = useState(currentUser);
    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5678/api/Channel/${currentUser.id}`, {
            method: 'GET',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
        })
             .then(response => response.json()) // parse JSON from request
             .then(data => { setChannelList(data); return })
             .catch((err) => {
                console.log(err.message);
             });
    }, []);

    const handleUserSelect = (user) => {
        setSelectedChannel(user);
    };

    return (
        <div className='dashboard'>
            <Sidebar channelList={channelList} handler={handleUserSelect} currentUser={currentUser}/>
            <Header user={selectedChannel}/>
            {selectedChannel.id === currentUser.id ? <Profile currentUser={currentUser} channelHandler={setSelectedChannel}/> : 
            <>
                <Chat currentChannel={selectedChannel} currentUser={currentUser}/>
                <div className='d-footer'/>
            </>}
        </div>  
    )
}

export default Dashboard;