import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Header from '../../component/header/Header';
import Chat from '../../component/chat/Chat';

import './dashboard.css';
import usersMock from '../../mocks/users';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar users={usersMock}/>
            <Header />
            <Chat />
        </div>  
    )
}

export default Dashboard;