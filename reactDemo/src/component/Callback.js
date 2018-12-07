import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Callback extends Component {
  constructor() {
    super();
    this.get = this.get.bind(this);
    this.getFirst = this.getFirst.bind(this);
  }

  getFirst(b) {
   console.log(b*2);
  }

  get(a,cb) {
    if(cb) {
     console.log(a); 
     cb(a);
    } else {
      console.log(a); 
    }
  }
  render() {
    return(
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <div
          style={{
            width:'200px',
            height: '30px',
            background: 'lightblue'
          }}
          onClick={() => this.get(1,this.getFirst)}
        >点击执行两个步骤</div>
      </div>
    );
  }
}

export default Callback;