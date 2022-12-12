import React, {useState} from "react";
import { StyledUserCard } from "./StyledUserCard";

import './Profile.css';

const Profile = ({currentUser, channelHandler}) => {
    const [userList, setUserList] = useState([]);

    const handleUserSearch = (e) => {
        if (e.target.value === "") setUserList([])
        else {
        fetch(`http://localhost:5678/api/User/search/${e.target.value}`, {
            method: 'GET',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
        })
             .then(response => response.json()) // parse JSON from request
             .then(data => { setUserList(data); return })
             .catch((err) => {
                console.log(err.message);
             });
        }
    }

    const handleChannelCreate = (userId) => {
        fetch('http://localhost:5678/api/Channel', {
            method: 'POST',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": currentUser.username + " & " + userList.find((user) => user.id === userId).username,
                "participantIds": [
                  currentUser.id,
                  userId
                ]
              })
        })
             .then(response => response.text())
             .then(document.getElementById("searchbar").value = "")
             .then(setUserList([]))
             .catch((err) => {
                console.log(err.message);
             });     
    };  

    return (
        <div className="profile">
            <input placeholder={"search for a friend to chat with"} className={"user-searchbar"} id="searchbar" onChange={handleUserSearch}/>
            <div className="user-list">
                {userList.length > 0 ? userList.map((user) => {
                    return (
                        <StyledUserCard onClick={() => handleChannelCreate(user.id)}>{user.username}</StyledUserCard>
                    )
                }) :null}
            </div>
        </div>
    );
}

export default Profile;