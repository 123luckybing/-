import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Password from './component/Password';
import HeadPortrait from './component/HeadPortrait'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* 有exact精准定位，跳新页面 */}
            <Route exact path='/' component={Home} />
            <Route path='/password' component={Password} />
            <Route path='/headPortrait' component={HeadPortrait}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
