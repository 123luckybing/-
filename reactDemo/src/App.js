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
import UpDown from './component/UpDown';
import Window from './component/Window';
import Renren from './component/Renren';
import Copy from './component/Copy';
import Marquee from './component/Marquee';
import Preload from './component/Preload';
import Debugger from './component/Debugger';
import Flex from './component/Flex';
import Ad from './component/Ad';
import ReactOne from './component/React';
import List from './component/List';
import Img from './component/Img';
import Callback from './component/Callback';

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
            <Route path='/UpDown' component={UpDown} />
            <Route path='/Renren' component={Renren} />
            <Route path='/Window' component={Window} />
            <Route path='/Copy' component={Copy} />
            <Route path='/Preload' component={Preload} />
            <Route path='/Marquee' component={Marquee} />
            <Route path='/Debugger' component={Debugger} />
            <Route path='/Flex' component={Flex} />
            <Route path='/Ad' component={Ad}/>
            <Route path='/ReactOne' component={ReactOne}/>
            <Route path='/List' component={List}/>
            <Route path='/Img' component={Img}/>
            <Route path='/Callback' component={Callback}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
