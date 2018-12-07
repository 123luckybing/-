import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Circle extends Component {
  render() {
    let arr = [1,2,34,null,true,false];
    console.info('arr.includes');
    console.log(arr.includes(1));
    console.log(arr.includes(4));
    console.log(arr.includes(true));
    console.log(arr.includes(false));
    console.log(arr.includes(null));
    const characters = [
      { id: 1, name: 'ironman' },
      { id: 2, name: 'black_widow' },
      { id: 3, name: 'captain_america' },
      { id: 4, name: 'captain_america' },
    ];
    let ok = characters.find( (elem) => {
      return (
        elem.name === 'captain_america' // 只找到第一个
      )
    });
    let ok2 = characters.filter( (elem) => {
      return (
        elem.name === 'captain_america' // 找所有的
      )
    });
    console.log(ok);
    console.log(ok2);
    let some = characters.some( (elem) => {
      return (
        elem.name === 'black_widow'
      )
    });
    console.log(some);
    return (
      
      <div>
        <Link to='/'><button>返回首页</button></Link><br/>
        <p>Array.includes</p>
        <p>Array.find</p>
        <p>只找到符合条件的第一项，找到后便不再找，若没有undefined</p>
        <p>Array.filter</p>
        <p>找所有的符合条件的</p>
        <p>Array.some 回调函数</p>
      </div>
    );
  }
}
export default Circle;