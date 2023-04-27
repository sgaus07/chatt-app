import React, { useEffect, useState } from 'react';
import  {useNavigate} from "react-router-dom";
import './Header.scss';
import { Outlet, Link } from "react-router-dom";
import { chatListFilterText, headerActiveTab } from '../../Services/DataService';

const Header = () => {

    const navigate = useNavigate();
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchText, setSearchText] = useState('');

    const [activeTab, setActiveTab] = useState();

    const searchInputHandler = (e) => {

        const { value } = e.target;

        setSearchText(value);

        chatListFilterText.next(value);
    }

    useEffect(() => {

        headerActiveTab.subscribe((value) => {

            setActiveTab(value);
        });   
    }, []);


    return (
        <>
            <div className="layout-page">
                <div className='header'>
                    <div className='action-block'>
                        <span className='title'>WhatsApp</span>
                        <div className='functional-icons'>
                            <div className='icon-block camera-icon' onClick={() => navigate('/camera/on')}>
                                <i className="fa-solid fa-camera"></i>
                            </div>

                            <div className='icon-block search-icon'>

                                <i onClick={() => { setIsSearchActive(true) }} className="icon fa-solid fa-magnifying-glass"></i>

                                <div className={isSearchActive ? "search-block active" : "search-block"}>
                                    <div className='b-arrow' ><i className="icon fa-sharp fa-solid fa-arrow-left" onClick={() => setIsSearchActive(false)}></i></div>
                                    <input type="search" onChange={searchInputHandler} value={searchText} name="" placeholder='Search' id="" />
                                </div>
                            </div>
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

                    <ul className="menu">
                        <Link className={activeTab === '/' ? 'active' : ''} to={'/'}>
                            <li>Chats</li>
                        </Link>
                        <Link className={activeTab === '/status/list' ? 'active' : ''} to={'/status/list'}>
                            <li>Status</li>
                        </Link>
                        <Link className={activeTab === '/call/list' ? 'active' : ''} to={'/call/list'}>
                            <li>Calls</li>
                        </Link>
                    </ul>
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Header;


