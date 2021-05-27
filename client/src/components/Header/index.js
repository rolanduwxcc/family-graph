
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
          <ul className="flex-row">
            <>
              <Link to="/login">Login</Link>
              <br />
              <Link to="/signup">Signup</Link>
              <br />
              <Link to="/UnitList">Create Family</Link>
            </>
            </ul>
          )}
        </nav>
      </div>
    </header>
//     <>
//   <Navbar bg="primary" variant="dark">
//     <Container>
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="#login">Login</Nav.Link>
//       <Nav.Link href="#SignUp">Sign Up</Nav.Link>
//       <Nav.Link href="#UnitList">Family Chart</Nav.Link>
//     </Nav>
//     </Container>
//   </Navbar>
// </>
  );
};
export default Header;
