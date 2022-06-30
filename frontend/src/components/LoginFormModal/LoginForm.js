import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css';

function LoginForm({ hideModal }) {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div id="login-form-container">
      <div id="login-header">
        <h2>
          login</h2>
      </div>
      <div id="error-container">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
      <form id="login-form" onSubmit={handleSubmit}>
        <div id="login-input-container">

          <label className="login-label">
            Email
            <input
              className="login-input"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Password
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

        </div>
        <div id="login-btn-container">
        <button type="submit">Log In</button>
        <button onClick={hideModal}>Cancel</button>

        </div>
      </form>

    </div>
  );
}

export default LoginForm;
