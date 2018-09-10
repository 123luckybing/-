import React, { Component } from 'react';
import { Link } from "react-router-dom";
import head from '../Img/head.jpg';
import zhou from '../Img/zhou.jpeg';
import '../css/ad.css';
class Ad extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.scroll = this.scroll.bind(this);
    this.unscroll = this.unscroll.bind(this);
  }
  unscroll() {
    this.refs.zhou.style.height = '0';
  }
  open() {
    this.refs.wrapper.style.right = '0';
  }
  close () {
    this.refs.wrapper.style.right = '-100px';
  }
  scroll() {
    this.refs.zhou.style.height = '200px';
  }
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <p>一：伸缩式弹窗,固定在右侧</p>
        <div className='first-wrapper' ref='wrapper'>
          <button className="hide" onClick={this.close}>X</button>
          <div className='ad-title' onClick={this.open}>广告</div>
          <div className="content">
            <img src={head} alt=""/>
          </div>
        </div>
        <p>二:上下弹窗</p>
        <div>
          <button onClick={this.scroll}>点击看小可爱</button><br/>
          <button onClick={this.unscroll}>小可爱快回去</button><br/>
          <img src={zhou} alt="" className='zhou' ref='zhou'/>
        </div>
        <p>三：大广告图消失，出现缩略图</p>
      </div>
    );
  }
}
export default Ad;