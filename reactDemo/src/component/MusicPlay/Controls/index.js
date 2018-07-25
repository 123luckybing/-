import './index.css';
import React, { Component } from 'react';
class Controls extends Component {
  constructor() {
    super();
    this.state = {
      playFlag: true,
    }
    this.pre = this.pre.bind(this);
    this.next = this.next.bind(this);
    this.playToggle = this.playToggle.bind(this);
  }
  // 播放上一首
  pre() {
    this.props.pre();
  }

  // 播放下一首
  next() {
    this.props.next();
  }

  // 播放暂停切换
  playToggle() {
    this.setState({
      playFlag: !this.state.playFlag,
    });
  }

  render() {
    const { playFlag } = this.state;
    return (
      <div>
        <button onClick={this.pre}>上一首</button>
        <button onClick={this.playToggle}>{ playFlag ? '播放':'暂停'}</button>
        <button onClick={this.next}>下一首</button>
      </div>
    );
  }
}
export default Controls;