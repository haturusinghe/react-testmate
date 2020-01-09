import React from "react";
import "./Styles/App.css";

import Papers from "./Pages/Papers";
import Error from "./Pages/Error";
import Data from "./Pages/DataPage";
import Home from "./Pages/Home";
import SinglePaper from "./Pages/SinglePaper";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="page-navbar">
        <Navbar />
      </div>
      <div className="page-body">
        <div className="page-sidebar">
          <Sidebar />
        </div>
        <div className="page-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/papers/:subject/:type/:year/:slug"
              component={SinglePaper}
            />

            <Route exact path="/papers/:subject/:type" component={Papers} />
            <Route exact path="/papers/:subject/" component={Papers} />
            <Route exact path="/papers" component={Papers} />
            <Route exact path="/roadmap" component={Data} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
      <div className="page-footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
