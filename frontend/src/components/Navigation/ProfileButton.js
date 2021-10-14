import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './Navigation.css'

function ProfileButton({ user }) {
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
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-bars "></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li><a className="user-profile-button" href={`/images/${userId}`}>{user.username}'s Profile</a></li>
          <li>{user.email}</li>
          <li><a href='/images' className='to-the-images'>Images</a></li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
