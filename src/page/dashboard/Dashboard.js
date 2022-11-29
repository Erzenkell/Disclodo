import React, {useState} from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Header from '../../component/header/Header';
import Chat from '../../component/chat/Chat';

import './dashboard.css';
import usersMock from '../../mocks/users';

const Dashboard = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    }

    return (
        <div className='dashboard'>
            <Sidebar usersList={usersMock} handler={handleUserSelect}/>
            <Header user={selectedUser}/>
            <Chat user={selectedUser}/>
        </div>  
    )
}

export default Dashboard;