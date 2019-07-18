import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from "./components/Chat";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={Chat} />
          <Route path="/login/" component={Login} />
      </Router>
    );
  }
}

export default App;