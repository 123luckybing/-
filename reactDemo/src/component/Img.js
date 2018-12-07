import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Img extends Component {
  render() {
    const ImgList = [
      {
        index: 1,
        name: '猫'
      },{
        index: 2,
        name: '哭洲'
      },{
        index: 3,
        name: '难过洲'
      },{
        index: 4,
        name: '傲慢洲'
      },{
        index: 5,
        name: '哼洲'
      }
    ];
    const img = ImgList.map( (elem,index) => {
      return (
        <img
          style={{
            width: '50px',
            height: '50px'
          }}
          key={index}
          // src ={`../Img/${elem.index}${elem.name}.jpeg`}
          // 但是得 先把图片import进来，很麻烦 用require即可
          src={ require(`../Img/${elem.index}${elem.name}.jpeg`) }
          alt='' 
        />
      )
    });
    return(
      <div>
        <Link to='/'><button>返回首页</button></Link><br/>
        <h1> src= require(文件路径)</h1>
        {img}

      </div>
    );
  }
}
export default Img;