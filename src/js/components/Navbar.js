import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

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
        </div>

        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <Link to="/logout" className="btn btn-sm btn-outline-danger ml-2">
            Logout
          </Link>
          <Link to="/login" className="btn btn-sm btn-outline-success ml-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-sm btn-outline-success ml-2">
            Register
          </Link>
          <div className="chat-navbar-inner-left">
            <Link
              to="/settings"
              className="btn btn-sm btn-outline-success ml-2"
            >
              Settings
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
