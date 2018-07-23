import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PasswordResetSuccess extends Component {
  constructor() {
    super();
    this.state = {
      display: 'none',
      show: 'none',
      second: '3'
    }
    this.successShow = this.successShow.bind(this);
    this.show = this.show.bind(this);
    this.flag = this.flag.bind(this);
    this.timer = this.timer.bind(this);
  }
  
  timer() {
    setInterval( () => {
      this.setState({
        second: this.state.second - 1,
      }, this.flag);
      // state是异步的，所以写在这里调用方法
    }, 1000);
  }

  flag() {
    if(this.state.second < 0) {
      this.setState({
        show: 'none',
      });
    }
  }

  show() {
    this.setState({
      show: 'block',
    });
     this.timer();
  }

  // 点击显示，3秒后消失
  successShow() {
    // 点击显示
    this.setState({
      display: 'block',
    });
    // 3秒后消失
    setTimeout( () => {
      this.setState({
        display: 'none',
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/><br/>
        <p>当密码重置成功后，显示重置成功页面，然后3秒后消失，有两种表现形式</p>
        <h4>(一)：显示页面3秒后消失</h4>
        <button onClick={this.successShow}>点击重置成功</button>
        <div style={{
          width: '130px',
          height: '50px',
          border: '1px solid #ccc',
          borderRadius: '15px',
          textAlign: 'center',
          padding: '20px',
          marginTop: '20px',
          display: `${this.state.display}`
        }}>
          密码重置成功
        </div>
        <h4>(二)：页面显示3秒倒计时</h4>
        <button onClick={this.show}>点击重置成功</button>
        <div style={{
          width: '130px',
          height: '50px',
          border: '1px solid #ccc',
          borderRadius: '15px',
          textAlign: 'center',
          padding: '20px',
          marginTop: '20px',
          display: `${this.state.show}`
        }}>
          密码重置成功<br/>
          {this.state.second}s 后自动关闭
        </div>
      </div>
    );
  }
}
export default PasswordResetSuccess;