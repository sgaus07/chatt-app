import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './../Components/Header/Header';
import ChatList from './../Components/ChatList/ChatList';
import StatusList from './../Components/StatusList/StatusList';
import CallList from './../Components/CallList/CallList';
import ChatBox from './../Components/ChatBox/ChatBox';
import RegistrationPage from './../Components/RegistrationPage/RegistrationPage'
import UserList from './../Components/UserList/UserList';
import OnCallPage from '../Components/OnCallPage/OnCallPage';
import CameraScreen from '../Components/Camera/Camera';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Header />}>
                    <Route index element={<ChatList />} />
                    <Route path='status/list' element={<StatusList />} />
                    <Route path='call/list' element={<CallList />} />
                </Route>
                <Route path='user/chat/:id' element={<ChatBox />} />
                <Route path='login' element={<RegistrationPage />} />
                <Route path='user/list' element={<UserList />} />
                <Route path='call/on' element={< OnCallPage />} />
                <Route path='camera/on' element={< CameraScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
