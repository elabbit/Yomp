import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage({hideModal}) {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div id="signup-form-container">
     <div id="signup-header">
        <h2>
          sign up</h2>
      </div>
      <div id="error-container">
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      </div>
    <form id="signup-form" onSubmit={handleSubmit}>
    <div id="signup-input-container">

        <input
        placeholder="First Name"
        className="signup-input"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
        placeholder="Last Name"
        className="signup-input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
        placeholder="Email"
        className="signup-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
        placeholder="Password"
        className="signup-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
        placeholder="Confirm Password"
        className="signup-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div id="signup-btn-container">
      <button type="submit">Sign Up</button>
      <button onClick={hideModal}>Cancel</button>
      </div>
    </form>

    </div>
  );
}

export default SignupFormPage;
