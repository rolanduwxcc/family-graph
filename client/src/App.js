import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Unit from './pages/Unit';

const client = new ApolloClient({
  // request: operation => { 
  //   const token = localStorage.getItem('id_token');

  //   operation.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : ''
  //     }
  //   });
  // },
  // uri: '/graphql'
  uri: 'http://localhost:3001/graphql'
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
                <Route exact path="/home2" component={Home2} />
                
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