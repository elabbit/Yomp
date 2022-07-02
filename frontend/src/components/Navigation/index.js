import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import BusinessFormModal from '../BusinessFormModal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

  };

  const demoLogin = () => {
    const credential = 'demo@email.com';
    const password = 'password'
    dispatch(sessionActions.login({ credential, password }))

  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id='center-side'>
          <NavLink exact to='/'>home</NavLink>
          <NavLink exact to='/burgerjoints'>browse</NavLink>
          <NavLink exact to='/about'>about</NavLink>
        </div>
        <div id='right-side'>
          <div id='logout-button-div'>
            <BusinessFormModal />
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
        <div id='center-side'>

          <NavLink exact to='/'>home</NavLink>
          <NavLink exact to='/burgerjoints'>browse</NavLink>
          <NavLink exact to='/about'>about</NavLink>


        </div>
        <div id='right-side'>
          <div id='login-signup-button'>
            <LoginFormModal />
            <SignupFormModal />
          </div>
          <div id='demo-button'>
            <span id='demo-span'>Try our</span>
            <button id='demo-link' className='nav-button' onClick={demoLogin}>Demo User</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id='header-container'>
      <div id='left-side'>
        <Link to="/">
          <span id='logo'>yomp </span>
          <i id="yelp" className="fab fa-yelp"></i></Link>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
