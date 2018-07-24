// 进度条组件
import React, {Component } from 'react';
import './index.css';
class Progress extends Component {
  render() {
    return (
      <div>
        {this.props.time}秒
      </div>
    );
  }
}
export default Progress;