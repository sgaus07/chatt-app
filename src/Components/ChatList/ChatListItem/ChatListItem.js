import React from 'react';
import { useNavigate } from "react-router-dom";
import './ChatListItem.scss';

export default function ChatListItem(props) {

    const navigate = useNavigate();

    const { id, name, message, time } = props.data;

    return (
        <>
            <div className="chat-list-item" onClick={() => { navigate(`/user/chat/${id}`) }}>
                <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div className='user-detail'>
                    <h2 className='name'>{name}</h2>
                    <label htmlFor="" className='message'>{message}</label>
                    <label htmlFor="" className='time'>{time}</label>
                </div>
            </div>
        </>
    );
}
