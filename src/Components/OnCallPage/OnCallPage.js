import React, { useState } from 'react';
import './OnCallPage.scss';
import {useNavigate} from "react-router-dom"

export default function OnCallPage() {
   
  const navigate = useNavigate();

  const [isMicEnabled, setIsMicEnabled] = useState(true);
  const [isSpeakEnable, setIsSpeakEnabled] = useState(true);
  const [isVidEnabled, setIsVidEnabled] = useState(true);

  const onEnableDisableMic = () => {
  
    setIsMicEnabled(!isMicEnabled);
  }
  const onEnableDisableVid = () => {

    setIsVidEnabled(!isVidEnabled);
  }
  const onEnableDisableSpeak = () => {

    setIsSpeakEnabled(!isSpeakEnable);
  }

  return (

    <>
      <div className='container'>
        <div className='call-page'>
        <div className='cancel-icon' onClick={() => navigate('/call/list')}><i className="fas fa-regular fa-xmark"></i></div>
         <div className='user-dp'>
          <img src='https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png' alt='' />
          </div> 
        <div className='user-name'>User</div>
        </div>
        <div className='call-function'>
          <div onClick={onEnableDisableSpeak} className='item' ><i className={isSpeakEnable ? 'fas fa-regular fa-volume-high' : 'fas fa-regular fa-volume-mute'}></i></div>
          <div onClick={onEnableDisableVid} className='item'><i className={isVidEnabled ? 'fas fa-solid fa-video' : 'fas fa-solid fa-video-slash'}></i></div>
          <div onClick={onEnableDisableMic} className='item'><i className={isMicEnabled ? 'fas fa-regular fa-microphone' : 'fas fa-regular fa-microphone-slash'}></i></div>
          <div className='item'>
            <div className='hangout-icon'>
            <i className="fas fa-solid fa-phone"></i>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
