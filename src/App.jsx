import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AspectRatioDetail from "./poc/aspect-ratio/AspectRatioDetail";
import TextBorderDetail from "./poc/text-border/TextBorderDetail";
import TextProgressDetail from "./poc/text-progress/TextProgressDetail";
import WordBreakerDetail from "./poc/word-breaker/WordBreakerDetail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/aspect-ratio">
            <AspectRatioDetail />
          </Route>
          <Route path="/text-border">
            <TextBorderDetail />
          </Route>
          <Route path="/text-progress">
            <TextProgressDetail />
          </Route>
          <Route path="/word-breaker">
            <WordBreakerDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
