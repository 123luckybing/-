import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Preload extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        
      </div>
    );
  }
}
export default Preload;