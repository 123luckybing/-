import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/flex.css';

class Flex extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
       <a 
        href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"
        target="_blank"
       >参考文章</a>

       <div className='first'>
          <div className='flex-item'>1</div>
          <div className='flex-item'>2</div>
          <div className='flex-item'>3</div>
          <div className='flex-item'>4</div>
       </div>

       <div className='second'>
          <div className='flex-item'>1</div>
          <div className='flex-item'>2</div>
          <div className='flex-item'>3</div>
          <div className='flex-item'>4</div>
       </div>

       <div className='third'>
          <div className='flex-item'>1</div>
          <div className='flex-item'>2</div>
          <div className='flex-item'>3</div>
          <div className='flex-item'>4</div>
       </div>

       <div className='fourth'>
          <div className='flex-item-1'>1</div>
          <div className='flex-item-2'>2</div>
          <div className='flex-item-3'>3</div>
          <div className='flex-item'>4</div>
       </div>
      </div>
    );
  }
}
export default Flex;