import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './Navigation.css'

function ProfileButton({ user }) {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-bars "></i>
      </button>
      {showMenu && (
        //TODO change the a tags to Nav Links!!!!!!
        <ul className="profile-dropdown">
          <li><NavLink className="user-profile-button" to={`/images/${userId}`}>{user.username}'s Profile</NavLink></li>
          <li>Email: {user.email}</li>
          <li><NavLink to='/images' className='to-the-images'>Images</NavLink></li>
          <li>
            <button className='log-out' onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
