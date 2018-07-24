// 头部组件
import React, { Component } from 'react';
import './index.css';
import logo from '../img/music.jpg';
class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <img src={logo} alt=""/>
          <div>React Music Player</div>
        </div>
      </div>
    );
  }
}
export default Header;
