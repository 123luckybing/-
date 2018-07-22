import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Padding extends Component {
  render() {
    return(
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <h4>(一)padding～行级元素上下(padding-top,padding-bottom)不好使，左右好使，但会影响背景颜色的上下扩张</h4>
        <span style={{background:'green',padding:'15px'}}>padding</span>
        <br/>
        <h4>(二)项目应用:高度可控分割线,利用padding</h4>
        注册
        <span style={{
          fontSize: 0,
          padding: '12px 6px 1px',// 改变高度
          borderLeft: '1px solid',
          marginLeft: '12px'
        }}></span>
        登陆
        <h4>(三)padding不支持任何形式的负值</h4>
        <h4>(四)padding实现正方形:利用padding:50%</h4>
          <div>50%是相对与父元素的宽度</div>
        <div style={{width:'100px'}}>
          <div>块级元素</div>
          <div style={{padding:'50%',background:'green'}}></div>
        </div>
        <div>行级元素:需加font-size:0,不然不是正方形</div><br/><br/>
        <div style={{width:'100px'}}>
          <span style={{padding:'50%',background:'green',fontSize:0}}></span>
        </div>
        <br/><br/>
        <h4>(五)ul/ol自带padding-left~Chrome浏览器下是40px, 单位是px</h4>
        <h4>(六)白眼:使用padding来实现</h4>
        <div style={{
          width:'150px',
          height: '150px',
          borderRadius: '50%',
          // 先画一个圆
          background: 'black', // 背景颜色
          border: '10px solid', // 最外面那个圈～
          padding: '10px', // 圆环
          backgroundClip: 'content-box' // 背景被裁剪到内容框content
        }}>
        </div>
      </div>
    );
  }
}
export default Padding;