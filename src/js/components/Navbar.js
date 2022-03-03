import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../action/auth'

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user)
  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-primary ml-2"
          >
            GoBack
          </button>
          <Link
            to="/settings"
            className="btn btn-sm btn-outline-success ml-2"
          >
            Settings
          </Link>
        </div>

        <div className="chat-navbar-inner-right">

          {!user &&
            <Link to="/" className="btn btn-sm btn-outline-success ml-2">
              Login
            </Link>}
          {user &&

            <>
              <img src={user.avatar} className="rounded-circle" style={{ width: "30px", }} alt="Avatar" />
              <span className="logged-in-user">Hi, {user.username}</span>
              <button
                onClick={() => dispatch(logout())}
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
