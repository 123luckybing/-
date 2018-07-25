// 进度条组件
import React, {Component } from 'react';
import './index.css';
class Progress extends Component {
  render() {

    return (
      <div className='wrapper'>
        <div 
          className='progress'
          style={{
            width:`${this.props.width}`+'px'
          }}
          >
          </div>
      </div>
    );
  }
}
export default Progress;