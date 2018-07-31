import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Copy extends Component {
  constructor() {
    super();
    this.copy = this.copy.bind(this);
  }

  //一键复制
  copy() {
    let input = this.refs.input;
    input.select();// 获取元素内容
    document.execCommand("Copy");  // 复制
  }

  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <input type="text" style={{width: '100px',height:'100px'}} ref='input'/><br/>
        <button onClick={this.copy}>一键复制</button>
        <div>
          let input = this.refs.input;<br/>
          input.select();// 获取元素内容<br/>
          document.execCommand("Copy");  // 复制
       </div>
      </div>
    );
  }
}
export default Copy;