import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };




  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id='center-side'>
          <NavLink exact to="/business/add">Add Business</NavLink>
        </div>
        <div id='right-side'>
          <div id='logout-button-div'>
            <button id='logout-button' onClick={logout}>Log Out</button>
          </div>
          <div id='welcome-message'>{'Welcome '}
            <span id="user-name">
              {sessionUser.firstName}
              </span>
          </div>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div id='right-side'>
          <div id='login-signup-button'>
            <NavLink id="login-button" to="/login">Log In</NavLink>
            <NavLink id="signup-button" to="/signup">Sign Up</NavLink>
          </div>
          <div id='demo-button'>
            <span>Try our </span>
            <NavLink id="demo-link" to="/demo">Demo User</NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id='header-container'>
      <div id='left-side'>
        <NavLink exact to="/">
          <span id='logo'>yomp </span>
          <i id="yelp" className="fab fa-yelp"></i></NavLink>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
