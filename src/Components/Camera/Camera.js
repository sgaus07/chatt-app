import React from 'react';
import './Camera.scss';
import {useNavigate} from "react-router-dom";

export default function Camera() {


   const navigate = useNavigate();

  return (
    <>
     
     <div className='container'>
        <div className='camera-function'>
             <div className='upper-function'>
                <div className='cancel-icon' onClick={() => navigate('/')}><i className="fas fa-regular fa-xmark"></i></div>
                <div className='flash-icon'><i className="fas fa-light fa-bolt-lightning"></i></div>
             </div>
             <div className='lower-function'>
                <div className='button-block'>
                <div className='click-button'>
                  <div className="button"></div>
                </div>
                <div className='galary-icon'><i className="fas fa-sharp fa-solid fa-image"></i></div>
                <div className='switch-icon'><i className="fas fa-thin fa-camera-rotate"></i></div>
                </div>
            </div>
        </div>
     </div>


    </>
  );
}
