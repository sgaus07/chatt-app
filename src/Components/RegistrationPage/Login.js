import React, { useContext, useState } from 'react';
import './RegistrationPage.scss'
import Values from '../../assets/Values';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  // const [cookies, setCookie] = useCookies(['token']);
  const [user, setUser] = useState({});
  const navigate = useNavigate();



  const onInputChange = (e) => {
    const { name, value } = e.target;

    setUser((Values) => {
      return { ...Values, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(Values.apiUrl + "user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",

      },
    })
      .then((response) => response.json())
      .then((response) => {

        let date = new Date();
        date.setDate(date.getDate() + 1);

        // setCookie('token', response.token, { path: '/', expires: date });

        // userContext.update(true);

        navigate('/');
      });
  };

  return (
    <>
      <div className="login-block">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input name='email' onChange={onInputChange} type="text" placeholder='Email' className="form-control" />
          </div>
          <br />
          <div className="form-group">
            <input name='password' onChange={onInputChange} type="password" placeholder='Password' className="form-control" />
          </div>
          <br />
          <div style={{ textAlign: 'right' }}>
            <button style={{ margin: '0' }} className='btn btn-primary'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}