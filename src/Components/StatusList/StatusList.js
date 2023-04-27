import React, { useEffect } from 'react';
import './StatusList.scss';
import { headerActiveTab } from './../../Services/DataService';


export default function StatusList() {

  useEffect(() => {

    headerActiveTab.next(window.location.pathname);
  }, [])

  return (
    <div>
      <div className="status-list-item">
        <img className='avatar' src="https://cdn.iconscout.com/icon/free/png-256/add-whatsapp-status-4941593-4108993.png" alt="" />
        <div className='user-status'>
          <h2 className='name'>My Status</h2>
          <label htmlFor="" className='note'>Tap to add status update</label>
        </div>
      </div>
    </div>
  );
}
