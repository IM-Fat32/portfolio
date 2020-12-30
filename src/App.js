import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage.jsx';
import ProjetsPage from './Pages/ProjectsPage/Projects.jsx';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route  exact path="/portfolio" component={HomePage} />
            <Route  exact path="/portfolio/projects" component={ProjetsPage}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
