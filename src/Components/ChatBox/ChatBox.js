import React, { useEffect, useState } from 'react';
import './ChatBox.scss';
import { useNavigate, useParams } from "react-router-dom";
import messages from '../../assets/MessageListData';
import Values from '../../assets/Values';

export default function ChatBox() {

    const { id } = useParams();

    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState(messages);

    const getUser = () => {

        fetch(Values.apiUrl + 'user/find/' + id).then((response) => {
            return response.json();
        }).then((response) => {
            setUser(response.user);
        }).catch((error) => {
            console.error(error);
        })
    }

    const handleInputChange = (e) => {

        setMessage(e.target.value);
    }

    const onSend = () => {

        const obj = {
            type: 'outgoing',
            message: message
        };

        setMessageList((values) => (
            [...values, obj]
        ));

        setMessage('');

        scrollToBottom();
    }

    const scrollToBottom = () => {

        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 100);
    }

    const isSendButtonDisabled = () => {

        return !((message.trim()).length > 0);
    }

    useEffect(() => {

        scrollToBottom();

        getUser();
    }, []);

    return (
        <>
            <div className='chats'>
                <div className='user-block'>
                    <div className='back-arrow' onClick={() => { navigate('/') }}><i className="fa-solid fa-arrow-left-long"></i></div>
                    <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <span className='user-name'>{user ? user.name || '' : ''}</span>
                    <div className='functional-icons'>
                        <div className='icon-block video-icon'><i className="icon fa-solid fa-video"></i></div>
                        <div className=' icon-block call-icon'><i className=" icon fa-solid fa-phone" onClick={() => navigate('/call/on')}></i></div>
                        <div className='icon-block kebab-icon dropleft'>
                                <i className="fa-solid fa-ellipsis-vertical" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                                </i>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="/">New Group</a></li>
                                    <li><a className="dropdown-item" href="/">New Broadcast</a></li>
                                    <li><a className="dropdown-item" href="/">Starred messages</a></li>
                                    <li><a className="dropdown-item" href="/">Payment</a></li>
                                    <li><a className="dropdown-item" href="/">Settings</a></li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div className="message-list">
                    {
                        messageList.map((message, i) => {

                            return (

                                <div key={i}>
                                    {
                                        message.type === 'incoming' ? <div key={i} className="message-item incoming">
                                            <div className="box">
                                                {message.message}
                                            </div>
                                        </div> : <div key={i} className="message-item outgoing">
                                            <div className="box">
                                                {message.message}
                                            </div>
                                        </div>
                                    }
                                </div>
                            ) 
                        })
                    }


                </div>
                <div className="chat-action-block">
                    <div className="chat-input-block">
                        <input onChange={handleInputChange} value={message} className='text-message-box' placeholder=' Message' />
                        <button disabled={isSendButtonDisabled()} onClick={onSend} className='send-button'><i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}
