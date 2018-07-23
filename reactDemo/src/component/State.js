import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../index.css';
class State extends Component {
  constructor() {
    super();
    this.state = {
      teleFlag: false,
      pswFlag: false,
      resetFlag: false,
    }
    this.tele = this.tele.bind(this);
    this.psw = this.psw.bind(this);
    this.reset = this.reset.bind(this);
  }
  tele(e) {
    if(e.target.value.length === 8) {
      this.setState({
        teleFlag: true,
      }, this.reset);
      // this.reset写在这里，同步
    } else {
      this.setState({
        teleFlag: false,
      }, this.reset);
    }
  }
  psw(e) {
    if(e.target.value.length === 6 ) {
      this.setState({
        pswFlag: true,
      }, this.reset);
    } else {
      this.setState({
        pswFlag: false,
      }, this.reset);
    }
  }
  reset() {
    console.log(this.state.teleFlag && this.state.pswFlag);
    if(this.state.teleFlag && this.state.pswFlag){
      this.setState({
        resetFlag: true,
      });
    } else {
      this.setState({
        resetFlag: false,
      });
    }
  }
  render() {
    const resetFlag = this.state.resetFlag;
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        className={`${resetFlag ? 'yellow' : 'red'}`}
        <p>这个问题是在做重置密码的时候遇到的，当电话号码和密码同时满足要求时，重置密码的背景变色，引导用户可点击</p>
        <p>简单起见：当电话号长度位8位，密码长度为6位时，即意味满足要求
          给两个input都onChange事件监听,并增加判断标识
        </p>
        <div>
          电话号码:
          <input type="text"
            onChange={this.tele}
          /><br/>
          密码:
          <input type="password"
            onChange={this.psw}
          /><br/>
          <div 
            style={{
              textAlign: 'center'
            }}
            className={`${resetFlag ? 'yellow' : 'red'}`}
          >重置密码</div>
        </div>
      </div>
    )
  }
}
export default State;