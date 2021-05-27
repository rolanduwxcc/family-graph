// // @flow

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// type Props = {};

// class App extends Component<Props> {
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UnitList from './components/UnitList/index';


const client = new ApolloClient({
  request: operation => { 
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
  <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />

              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
  </ApolloProvider>
  );
}

export default App;