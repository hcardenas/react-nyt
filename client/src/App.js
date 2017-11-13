import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import ImgCard from "./components/ImgCard";
import {Container} from "react-materialize";

const App = () =>
  <Router>
    <div>
      <Container>
        <Nav />
        <br />
        <ImgCard />
        <br />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />

          <Route component={NoMatch} />
        </Switch>
      </Container>
    </div>
  </Router>;

export default App;