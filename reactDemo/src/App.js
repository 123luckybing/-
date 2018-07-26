import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Password from './component/Password';
import HeadPortrait from './component/HeadPortrait'
import Padding from './component/Padding';
import Progress from './component/Progress';
import TimeOut from './component/TimeOut';
import StarScore from './component/StarScore';
import DivClick from './component/DivClick';
import State from './component/State';
import PasswordResetSuccess from './component/PasswordResetSuccess';
import MusicPlay from './component/MusicPlay/index';
import ProgressBar from './component/ProgressBar';
import Circle from './component/Circle';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* 有exact精准定位，跳新页面 */}
            <Route exact path='/' component={Home}/>
            <Route path='/password' component={Password}/>
            <Route path='/headPortrait' component={HeadPortrait}/>
            <Route path='/Padding' component={Padding}/>
            <Route path='/Progress' component={Progress}/>
            <Route path='/timeOut' component={TimeOut}/>
            <Route path='/StarScore' component={StarScore}/>
            <Route path='/PasswordResetSuccess' component={PasswordResetSuccess}/>
            <Route path='/DivClick' component={DivClick}/>
            <Route path='/State' component={State}/>
            <Route path='/MusicPlay' component={MusicPlay}/>
            <Route path='/ProgressBar' component={ProgressBar}/>
            <Route path='/Circle' component={Circle} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
