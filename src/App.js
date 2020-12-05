import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Photos from './components/Photos';
import News from './components/News';
import { Alert } from '@material-ui/lab';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header navBar">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/photos">
              Photos
            </Link>
            <Link className="link" to="/news">
              News
            </Link>
          </header>
        </div>
      
        {/* <ul class="navBar">
          <li><a href="#">Home</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">News</a></li>
        </ul> */}

        <div className="App-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/news" component={News} />
            
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

function Error404() {
  return (
    <Alert severity="error" className="alert">
      404: Resource Not Found
    </Alert>
  )
}

export default App;
