import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/flexP.css';
class Renren extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        （一）一个骰子九个位置
        <div className='total'>
        <div className='one-wrapper'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper top-center'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper top-right'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper center-left'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper center-center'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper center-right'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper bottom-left'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper bottom-center'>
          <div className='item-box'></div>
        </div>
        <div className='one-wrapper bottom-right'>
          <div className='item-box'></div>
        </div>
      </div>
      （二）两个骰子位置
      <div className="total">
      <div className="one-wrapper top">
        <div className='item-box'></div>
        <div className='item-box'></div>
      </div>
      <div className="one-wrapper column">
        <div className='item-box'></div>
        <div className='item-box'></div>
      </div>
      <div className="one-wrapper column-center">
        <div className='item-box'></div>
        <div className='item-box'></div>
      </div>
      <div className="one-wrapper column-right">
        <div className='item-box'></div>
        <div className='item-box'></div>
      </div>
      </div>
      </div>
    );
  }
}
export default Renren;