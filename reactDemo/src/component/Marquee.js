import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Marquee extends Component {
  constructor() {
    super();
    this.Astop = this.Astop.bind(this);
    this.Astart = this.Astart.bind(this);
  }
  Astart() {
    this.refs.mar.start();
  }
  Astop() {
    this.refs.mar.stop();
  }
  render() {
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <a href="https://www.jianshu.com/p/2ff138b8e1a1">参考文章</a><br/>
        <h4>循环滚动  behavior="scroll"</h4>
        <marquee
          direction="right" // 滚动方向
          behavior="scroll" // 滚动形式:
          width='200px' // 容器宽度
          height='50px' // 容器高度
          bgcolor='lightpink' // 背景颜色
        >
          金风玉露一相逢, 便胜却人间无数.<br/>
          两情若是久长时, 又岂在朝朝暮暮.
        </marquee>
        <hr/>
        <h4>来回滚动 behavior="alternate"</h4>
        <marquee
          direction="right" // 滚动方向
          behavior="alternate" // 滚动形式
          width='600px' // 容器宽度
          height='50px' // 容器高度
          bgcolor='lightpink' // 背景颜色
        >
          金风玉露一相逢, 便胜却人间无数.<br/>
          两情若是久长时, 又岂在朝朝暮暮.
        </marquee>
        <hr/>
        <h4>上滚动 direction="up"</h4>
        <marquee
          direction="up" // 滚动方向
          behavior="scroll" // 滚动形式
          width='600px' // 容器宽度
          height='100px' // 容器高度
          bgcolor='lightpink' // 背景颜色
        >
          金风玉露一相逢, 便胜却人间无数.<br/>
          两情若是久长时, 又岂在朝朝暮暮.
        </marquee>
        <hr/>
        <h4>左滚动 direction="left"</h4>
        <marquee
          direction="left" // 滚动方向
          behavior="scroll" // 滚动形式
          width='600px' // 容器宽度
          height='100px' // 容器高度
          bgcolor='lightpink' // 背景颜色
        >
          金风玉露一相逢, 便胜却人间无数.<br/>
          两情若是久长时, 又岂在朝朝暮暮.
        </marquee>
        <hr/>
        <h4>滚动速度scrollamount="10px" </h4>
        <marquee 
          direction="left"
          behavior="scroll"
          bgcolor='lightpink'
          width='600px' // 容器宽度
          height='100px' // 容器高度
          scrollamount="20px" // 滚动速度
        >
          金风玉露一相逢, 便胜却人间无数.<br/>
          两情若是久长时, 又岂在朝朝暮暮.
        </marquee>
        <hr/>
        <h4>循环次数loop='5'</h4>
        <marquee 
          direction="left"
          behavior="scroll"
          bgcolor='lightpink'
          loop='5'
          width='600px' // 容器宽度
          height='100px' // 容器高度
          scrollamount="20px" // 滚动速度
        >
          金风玉露一相逢, 便胜却人间无数.<br/>
          两情若是久长时, 又岂在朝朝暮暮.
        </marquee>
        <hr/>
        <h4>当鼠标停留在文字上，文字停止滚动:onmouseover=stop()
         onmouseout=start()</h4>
         <marquee 
          ref="mar"
          direction="left"
          behavior="scroll"
          bgcolor='lightpink'
          loop='5'
          onmouseover={this.Astop}
          onmouseout={this.Astart}
          width='600px' // 容器宽度
          height='100px' // 容器高度
          scrollamount="20px" // 滚动速度
        >
          金风玉露一相逢, 便胜却人间无数.<br/>
          两情若是久长时, 又岂在朝朝暮暮.
          有问题啊～
        </marquee>
        <hr/>
      </div>
    );
  }
}
export default Marquee;