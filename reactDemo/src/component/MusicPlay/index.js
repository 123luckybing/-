import React, { Component } from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Header from './Header/index';
import Prgress from './Progress/index';
class MusicPlay extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回首页</button></Link><br/>
        <p>参考文章：https://blog.csdn.net/lecepin/article/details/54865083</p>
        <Header />
        <Prgress 
          time='1'
        />
      </div>
    );
  }
}
export default MusicPlay;