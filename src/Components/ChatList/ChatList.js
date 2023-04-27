import React, { useEffect, useState } from 'react';
import './ChatList.scss';
import ChatListItem from './ChatListItem/ChatListItem';
import ChatListData from '../../assets/ChatListData';
import { useNavigate } from "react-router-dom";
import { chatListFilterText, headerActiveTab } from '../../Services/DataService';
const ChatList = () => {

    const navigate = useNavigate();
    const [chatList, setChatList] = useState(ChatListData);

    useEffect(() => {

        headerActiveTab.next(window.location.pathname);

        chatListFilterText.subscribe((value) => {
           
            const searchList = ChatListData.filter((user) => {

                return ((user.name).toLowerCase()).includes((value).toLowerCase());
            });
    
            setChatList(searchList);
        });
    }, [])

    return (
        <>
            <div className="chat-list-page">
                {
                    chatList.map((data, i) => {

                        return <div key={i}><ChatListItem data={data} /></div>
                    })
                }

                <div className='chat-icon' >
                    <i className="icon fa-solid fa-comment" onClick={() => navigate('user/list')}></i>
                </div>
            </div>
        </>
    );
}

export default ChatList;
