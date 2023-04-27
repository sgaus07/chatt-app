import React, { useState } from 'react';
import './RegistrationPage.scss';
import Login from './Login';
import Registration from './Registration';

export default function RegistrationPage() {
 
    const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="login-page">
        <div className="block">
          <table className="block-table">
            <tbody>
              <tr>
                <td
                  onClick={() => {
                    setIsLogin(true);
                  }}
                  className={isLogin ? "active" : ""}
                >
                  Login
                </td>
                <td
                  className={!isLogin ? "active" : ""}
                  onClick={() => {
                    setIsLogin(false);
                  }}                                  
                >
                  Register
                </td>
              </tr>
            </tbody>
          </table>
          {isLogin ? <Login /> : <Registration />}
        </div>
      </div>
    </>
  );
};
  
