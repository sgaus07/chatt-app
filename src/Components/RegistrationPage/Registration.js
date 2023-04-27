import React, { useState } from 'react';
import './RegistrationPage.scss';
import Values from '../../assets/Values';

export default function Registration() {
  const [user, setUser] = useState({});

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setUser((Values) => {
      return { ...Values, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(Values.apiUrl + "user/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        alert(response.message);
      });
  };

  return (
    <>
      <div className="login-block">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              name="name"
              onChange={onInputChange}
              type="text"
              placeholder="Name"
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <input
              name="email"
              onChange={onInputChange}
              type="text"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <input
              name="password"
              onChange={onInputChange}
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <br />
          <div style={{ textAlign: "right" }}>
            <button style={{ margin: "0" }} className="btn btn-primary">
                Registration
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

