import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./pages/post.jsx";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <div>Home</div>
        </Route>
        <Route path="/posts/:slug" exact>
          <Post />
        </Route>
      </Router>
    </div>
  );
};

export default App;
