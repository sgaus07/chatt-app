import React, { useEffect, useState } from 'react';
import './UserList.scss';
import { useNavigate } from "react-router-dom";
import Values from '../../assets/Values';
import ChatListItem from '../ChatList/ChatListItem/ChatListItem';


export default function UserList() {

    const navigate = useNavigate();
    const [userlist, setUserList] = useState([]);
    const [userListFromAPI, setUserListFromAPI] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchText, setSearchText] = useState('');

    const getUsers = () => {

        fetch(Values.apiUrl + "user/list", {
            method: 'get'
        })
            .then((response) => {
                return response.json();
            }).then((response) => {

                setUserListFromAPI(response.users);
                setUserList(response.users);

            }).catch((error) => {
                console.error(error);
            })
    }

    const searchInputHandler = (e) => {

        const { value } = e.target;

        setSearchText(value);

        const searchList = userListFromAPI.filter((user) => {

            return ((user.name).toLowerCase()).includes((value).toLowerCase());
        });

        setUserList(searchList);
    }

    useEffect(() => {

        getUsers();

    }, []);

    return (
        <>

            <div className='user-block'>
                <div className='back-arrow' ><i className="icon fa-sharp fa-solid fa-arrow-left" onClick={() => navigate('/')}></i></div>
                <span className='user-name'>Search</span>
                <div className='functional-icons'>
                    <i onClick={() => {

                        setIsSearchActive(true);
                    }} className="icon fa-solid fa-magnifying-glass"></i>
                </div>

            </div>
            <div className={isSearchActive ? "search-block active" : "search-block"}>
                <div className='back-arrow' ><i className="icon fa-sharp fa-solid fa-arrow-left" onClick={() => setIsSearchActive(false)}></i></div>
                <input type="search" onChange={searchInputHandler} value={searchText} name="" placeholder='Search' id="" />
            </div>

            <div className="user-list-page">
                {
                    userlist.map((data, i) => {

                        return <div key={i}>
                            <ChatListItem data={data} />
                        </div>
                    })
                }
            </div>
        </>
    );
}
