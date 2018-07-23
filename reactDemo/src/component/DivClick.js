import React, { Component } from 'react';
import { Link } from "react-router-dom";
class DivClick extends Component {
  constructor() {
    super();
    this.state = {
      value: '可弹',
      clickFlag: true,
    }
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({
      clickFlag: !this.state.clickFlag,
      value: this.state.value === '可弹'  ? '不弹' :'可弹',
    });

    if(this.state.clickFlag) {
      alert('1');
    } else {
      return false; // 不可点击return false
    }
  }

  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <h4>div不可点击return false即可</h4>
        <div 
          onClick={this.click}
          style={{
            width: '100px',
            height: '100px',
            background: 'green',
            textAlign: 'center',
            lineHeight: '100px',
          }}
        >
          {this.state.value}
        </div>
      </div>
    )
  }
}
export default DivClick;