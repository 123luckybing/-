import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Flex extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        Flex布局
      </div>
    );
  }
}
export default Flex;