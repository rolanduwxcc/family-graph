
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="container ">
        <Link to="/">
          <h1>Family Graph</h1>
        </Link>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/UnitList">Create Family</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
