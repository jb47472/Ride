import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Search from "./components/pages/Search";
import Result from "./components/pages/Result/Result";
import NavTabs from "./components/NavTabs";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <div id="nav">
          <NavTabs />
        </div>
        <br></br>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/result" component={Result} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
