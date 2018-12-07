import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return(
      <div>
        <h1>目录</h1>
        <ul>
          <li><Link to='/password'>密码明暗文切换</Link></li>
          <li><Link to='/headPortrait'>图片上传前预览</Link></li>
          <li><Link to='/Padding'>深入了解CSS之padding</Link></li>
          <li><Link to='/Progress'>声音进度条</Link></li>
          <li><Link to='/TimeOut'>毕业倒计时</Link></li>
          <li><Link to='/StarScore'>星级评分系统</Link></li>
          <li><Link to='/PasswordResetSuccess'>密码重置成功倒计时</Link></li>
          <li><Link to='/DivClick'>div不可点击return false</Link></li>
          <li><Link to='/State'>State异步</Link></li>
          <li><Link to='/MusicPlay'>react音乐播放器</Link></li>
          <li><Link to='/ProgressBar'>常见进度条</Link></li>
          <li><Link to='/UpDown'>点击上移下移</Link></li>
          <li><Link to='/Renren'>flex布局实战</Link></li>
          <li><Link to='/Window'>location.href</Link></li>
          <li><Link to='/Copy'>一键复制</Link></li>
          <li><Link to='/Preload'>小提示相对于中间内容固定定位</Link></li>
          <li><Link to='/Marquee'>文字滚动效果</Link></li>
          <li><Link to='/Debugger'>Debugger设置断点</Link></li>
          <li><Link to='/Flex'>Flex布局</Link></li>
          <li><Link to='/Ad'>网页广告</Link></li>
          <li><Link to='/List'>与或运算符应用新天地</Link></li>
          <h2>React开发实战</h2>
          <li><Link to='/ReactOne'>react开发实战整理</Link></li>
          <h2>前端开发公众号汇总</h2>
          <li><Link to='/Circle'>前端开发公众号汇总</Link></li>
          <li><Link to='/Img'>大量图片循环</Link></li>
          <li><Link to='/Callback'>回调函数</Link></li>
        </ul>
      </div>
    );
  }
}
export default Home;