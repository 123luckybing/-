import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/sanjiao.css';
class Renren extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        
      </div>
    );
  }
}
export default Renren;