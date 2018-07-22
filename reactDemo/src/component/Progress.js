import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Progress extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      voice: '10',
    }
  }
  onChange(e) {
    this.setState({
      voice: e.target.value, // value值是时刻显示大小的
    });
  }
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        音量：
        <input type="range" max="10" min="0" onInput={this.onChange}/>
        {/* max是最大值，min是最小值，value是滑块所在的位置，0最左，10最右 
          绑定onInput事件，可以监听value值的变化
        */}
        <span>{this.state.voice}</span>
      </div>
    );
  }
}
export default Progress;