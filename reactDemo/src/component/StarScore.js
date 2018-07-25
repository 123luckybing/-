import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/StarScore.css';
class StarScore extends Component {
  constructor() {
    super();
    this.state = {
      num: 2,
    }
    this.click = this.click.bind(this);
  }
  click(e) {
    this.setState({
      num: e.target.dataset.index,
    });
  }
  render() {
    let arr = [1,2,3,4,5];
    let starList = arr.map((elem,index) => {
      return(
        <li
        onClick={this.click}
        className={ Number(`${index}`) < Number(`${this.state.num}`)? 'selected' : 'item'}
        key={index}
        data-index={elem}
        // data- 自定义属性，取的话dataset.
        >
        </li>
      )
    });
    return (
      <div>
        <Link to='/'><button>返回首页</button></Link><br/>
        <ul className="Wrapper">
          {starList}
        </ul>
      </div>
    );
  }
}
export default StarScore;