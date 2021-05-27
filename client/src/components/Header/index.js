
// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
// const Header = () => {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
    // <header className="">
    //   <div className="container ">
    //     <Link to="/">
    //       <h1>Family Graph</h1>
    //     </Link>
    //     <nav className="text-center">
    //       {Auth.loggedIn() ? (
    //         <>
    //           <a href="/" onClick={logout}>
    //             Logout
    //           </a>
    //         </>
    //       ) : (
    //       <ul className="flex-row">
    //         <>
    //           <Link to="/login">Login</Link>
    //           <br />
    //           <Link to="/signup">Signup</Link>
    //           <br />
    //           <Link to="/UnitList">Create Family</Link>
    //         </>
    //         </ul>
    //       )}
    //     </nav>
    //   </div>
    // </header>
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
// // </>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <h3 className="navbar-brand">
//           <a href="/">Family Graph</a>
//         </h3>
//           <div className="navbar-nav">
//             <a className="nav-item nav-link active" href="/"><span className="sr-only">Home</span></a>
//             <br/>
//             <a className="nav-item nav-link" href="/home2">Home2</a>
//             <br/>
//             <a className="nav-item nav-link" href="/login">Login</a>
//             <br/>
//             <a className="nav-item nav-link disabled" href="/signup" tabindex="-1" aria-disabled="true">Signup</a>
//           </div>
        
//       </nav>
//   );
// };
// export default Header;

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
                {/* <Link to="/Home">Create Family</Link> */}
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