import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/sanjiao.css';
class Debugger extends Component {
  componentDidMount() {
    for(let i=0; i<5; i++) {
      debugger;
      // debugger 语句中止执行，但它不关闭任何文件或清除任何变量。
      console.log(i);
    }
  }
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        
      </div>
    );
  }
}
export default Debugger;