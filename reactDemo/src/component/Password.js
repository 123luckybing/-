import React, { Component } from 'react';
import { Link } from "react-router-dom";
// 需求：1.点击按钮明暗文切换
//      2.超过8个字符不允许再输入
class Home extends Component {
  constructor(){
    super();
    this.typeChange = this.typeChange.bind(this);
    this.state = {
      type: 'text'
    }
  }
  // 点击按钮明暗文切换
  typeChange(){
    if(this.state.type === 'password') {
      this.setState({
        type: 'text'
      });
    } else {
      this.setState({
        type: 'password'
      });
    }
  }
  render() {
    const {type} = this.state;
    return(
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <div>
          密码超过8个字符不允许再输入<br/>
          <input type={type} maxLength="6"/>
          {/* 超过6个字符不允许再输入 maxLength='6' */}
          <button onClick={this.typeChange}>明暗文切换</button>
        </div>
      </div>
    );
  }
}
export default Home;