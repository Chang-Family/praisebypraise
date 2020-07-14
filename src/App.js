import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Home from "./pages/home";
import Post from "./pages/post";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts/:slug" exact>
          <Post />
        </Route>
      </Router>
    </div>
  );
};

export default App;
