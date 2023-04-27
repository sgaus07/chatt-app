import React, { useEffect } from 'react';
import './CallList.scss';
import {useNavigate} from "react-router-dom";
import { headerActiveTab } from '../../Services/DataService';

export default function CallList() {

  const navigate = useNavigate();

  useEffect(() => {

    headerActiveTab.next(window.location.pathname);
  }, [])

  return (
    <>
    <div className="call-logs">
        <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <div className='user-detail'>
            <h2 className='name'>User</h2>
            <label htmlFor="" className='date-time'>December 28,12:12 PM</label>
            <div className='icon-phone'><i className="fa-solid fa-phone" onClick={() => navigate('/call/on')}></i></div>

        </div>
    </div>
</>
  );
}
