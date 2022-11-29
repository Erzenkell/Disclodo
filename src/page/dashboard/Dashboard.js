import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';

import './dashboard.css';
import usersMock from '../../mocks/users';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar users={usersMock}/>
            <h1>Dashboard</h1>
        </div>  
    )
}

export default Dashboard;