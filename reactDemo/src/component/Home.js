import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return(
      <div>
        <h1>目录</h1>
        <ul>
          <li><Link to='/password'>密码明暗文切换</Link></li>
          <li><Link to='/headPortrait'>图片上传前预览</Link></li>
          <li><Link to='/Padding'>深入了解CSS之padding</Link></li>
          <li><Link to='/Progress'>进度条</Link></li>
        </ul>
      </div>
    );
  }
}
export default Home;