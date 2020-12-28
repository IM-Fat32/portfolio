import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import HomePage from './Pages/HomePage.jsx';

import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <Route  exact path="/" component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
