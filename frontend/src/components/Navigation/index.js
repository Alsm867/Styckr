import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from "../SignupFormModal";
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const discpatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');

  const demoLogin = async () => {
    setCredential('demo@user.io');
    setPassword('password');
    return discpatch(
      sessionActions.login({credential: 'demo@user.io', password: 'password'})
    );
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton className="profile-user" user={sessionUser} />
    );
  } else {
    sessionLinks = (
        <div className='home-page'>
          <LoginFormModal className="login-form"/>
          <button className='demo' onClick={demoLogin}>Demo Login</button>
          <SignupFormModal className="signup-form"/>
        </div>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
