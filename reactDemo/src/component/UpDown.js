import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/UpDown.css';
class UpDown extends Component {
  constructor() {
    super();
    this.state = {
      arrList :[1,2,3,4,5],
    }
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  //上移
  up(e) {
    // 父元素的index
    let { arrList} = this.state;
    let temp;
    let index = e.target.parentNode.dataset.index;
      if( index === '0' ) {
        return false;
      } else {
        temp = arrList[index];
        arrList[index] = arrList[index - 1];
        arrList[index - 1] = temp;
        this.setState({
          arrList,
        });
      }
  }

  // 下移
  down(e) {
    let index = e.target.parentNode.dataset.index;
    // 加一当成拼接字符串了,所以Number(); + 存在字符串拼接的问题，要注意
    let indexAdd = Number(index) + 1; 
    let { arrList } = this.state;
    let tempDown;
    if (index != arrList.length - 1) {
      tempDown = arrList[index];
      arrList[index] = arrList[indexAdd];
      arrList[indexAdd] = tempDown;
      this.setState({
          arrList,
      });
    }
  }

  render() {
    const {arrList} = this.state;
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        {
          arrList.map((elem,index) => {
            return (
            <div 
              key={index} 
              className="upDown-item-wrapper" 
              data-index={index}
            >
              <li>{elem}</li>
              <span onClick={this.up}>上移</span>
              <span className='line'></span>
              <span onClick={this.down}>下移</span>
            </div>
          )
        })
        }
      </div>
    );
  }
}
export default UpDown;