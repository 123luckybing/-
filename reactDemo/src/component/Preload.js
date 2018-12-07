import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Preload.css';

class Preload extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <div className="wrapper">
        </div>
        <div className="tip">
          <div className="tip-content">
            固定定位
          </div>
        </div>
      </div>
    );
  }
}
export default Preload;