<<<<<<< HEAD
import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
    return (
        <div>
            <Nav />
            <Books />
        </div>
    );
=======
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Options from "./components/pages/Options";
import Result from "./components/pages/Result";
import NavTabs from "./components/NavTabs";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <div id="nav">
          <NavTabs />
        </div>

        <Wrapper>
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/options" component={Options} />
          <Route exact path="/result" component={Result} />
        </Wrapper>
      </div>
    </Router>
  );
>>>>>>> d8ee9e866d9e4b3469574f61d3455597763a84c1
}

export default App;
