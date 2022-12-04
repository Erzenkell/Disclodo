import React, {useState} from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Header from '../../component/header/Header';
import Chat from '../../component/chat/Chat';
import Profile from '../../component/profile/Profile';

import './dashboard.css';
import usersMock from '../../mocks/users';

const currentUser =  {
    "name": "Jean Bon",
    "id" : "0",
    "icon": 'https://i.pinimg.com/564x/28/8a/9a/288a9a3a41e2998cbea875661dee0c13.jpg',
};

const Dashboard = () => {
    const [selectedUser, setSelectedUser] = useState(currentUser);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className='dashboard'>
            <Sidebar usersList={usersMock} handler={handleUserSelect} currentUser={currentUser}/>
            <Header user={selectedUser}/>
            {selectedUser === currentUser ? <Profile user={currentUser}/> : <Chat selectedUser={selectedUser} currentUser={currentUser}/>}
        </div>  
    )
}

export default Dashboard;