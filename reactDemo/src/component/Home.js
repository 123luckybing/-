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
          <li><Link to='/ProgressBar'>常见的进度条</Link></li>
          <li><Link to='/Circle'>环形进度条</Link></li>
          <li><Link to='/UpDown'>点击上移下移</Link></li>
          <li><Link to='/Renren'>人人网评论转发点赞</Link></li>
        </ul>
      </div>
    );
  }
}
export default Home;