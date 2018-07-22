import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StarScore extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>返回首页</button></Link>
      </div>
    );
  }
}
export default StarScore;