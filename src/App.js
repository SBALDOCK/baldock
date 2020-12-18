import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
