import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Circle extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回首页</button></Link><br/>
        <h3>Canvas实现环形进度条，并实现数字百分比</h3>
        <canvas
          id="canvas"
          style={{
            width: '150px',
            height: '150px',
            background: '#000',
          }}
          >

        </canvas>
      </div>
    );
  }
}
export default Circle;