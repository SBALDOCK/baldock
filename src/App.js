import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import About from './components/pages/About';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/blog' component={Blog} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
