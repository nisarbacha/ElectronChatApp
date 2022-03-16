import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/action/auth'
import Backbutton from "./shared/Backbutton";

function Navbar({ canGoBack }) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(location)
  }, [location])

  const user = useSelector(({ auth }) => auth.user)
  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          {canGoBack && <Backbutton />}
          <Link to="/settings" className="btn btn-sm btn-outline-success ml-2"> Settings </Link>
        </div>

        <div className="chat-navbar-inner-right">
          {user &&
            <>
              <img src={user.avatar} className="rounded-circle" style={{ width: "30px", }} alt="Avatar" />
              <span className="logged-in-user">Hi, {user.username}</span>
              <button
                onClick={() => {
                  dispatch(logout())

                }}
                className="btn btn-sm btn-outline-danger ml-5">Logout
              </button>
            </>

          }

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
