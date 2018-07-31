import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Window extends Component {
  constructor() {
    super();
    this.baidu = this.baidu.bind(this);
  }
  baidu() {
    window.location.href = 'https://www.baidu.com/';
    // 跳转 window.location.href
  }
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <div>self.location.href; //当前页面打开URL页面</div>
        <div>window.location.href;//当前页面打开URL页面</div>
        <div>this.location.href;//当前页面打开URL页面</div>
        <div>location.href;// 当前页面打开URL页面</div>
        <div>parent.location.href;//在父页面打开新页面</div>
        <div>top.location.href;//在顶层页面打开新页面 </div>
        <button onClick={this.baidu}>百度</button>
      </div>
    );
  }
}
export default Window;