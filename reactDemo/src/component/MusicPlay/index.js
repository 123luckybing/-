import React, { Component } from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Header from './Header/index';
import Progress from './Progress/index';
import TrackInfo from './TrackInfo/index';
import Controls from './Controls/index';
import Time from './Time/index';
// npm install axios --save（axios请求接口）
import axios from 'axios';

class MusicPlay extends Component {
  constructor() {
    super();
    this.state = {
      songList: [], // 歌曲列表
      listLength: '', // 歌曲的长度
      index: 0, // 当前播放的歌曲索引，默认从第一首开始播放
      playTime: 10, // 当前歌曲已经播放的时间
      totalTime: 100, // 当前歌曲的总时间
      platState: false, // 当前歌曲的播放状态，true为正在播放，false为暂停状态
    }
    this.pre = this.pre.bind(this);
    this.next = this.next.bind(this);
  }
  componentWillMount() {
    let url = 'https://bird.ioliu.cn/v1?url='+'https://music.163.com/api/playlist/detail?id=1';
    axios.get(url).then((res) => {
      this.setState({
        songList:  res.data.result.tracks,
        // playTime:
        // totalTime:
      });
    }).catch(() => {
      console.log("请求数据接口失败");
    });
  }

  // 播放上一首
  pre() {
    const { index, songList } = this.state;
    if (index === 0) {
      this.setState({
        index:  songList.length - 1,
      });
    } else {
      this.setState({
        index: index - 1,
      });
    }
  }

  // 播放下一首
  next() {
    const { index, songList } = this.state;
    if(index === songList.length - 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  render() {
    let {songList,index,playTime,totalTime} = this.state;
    const progressWidth = (playTime/totalTime)*300;
    const mp3Url = songList;
    console.log(mp3Url);
    return (
      <div>
        <Link to='/'><button>返回首页</button></Link><br/>
        {/* 参考文章：https://blog.csdn.net/lecepin/article/details/54865083
        网易云后台接口: https://music.163.com/api/playlist/detail?id=XXX</p>
        服务器代理接口：https://bird.ioliu.cn/v1?url= */}
        {/* 播放器头部 */}
        <Header />
        {/* 音乐信息  */}
        <TrackInfo
          songList={songList}
          index = {index}
        />
        {/* 播放进度条   */}
        <Progress 
          width={progressWidth}
        />
        {/* 播放控制  */}
        <Controls 
        pre ={this.pre}
        next ={this.next}
        />
        {/* 播放时间   */}
        <Time />
        {/* 音频控件  */}
        <audio id="audio" src=''></audio>
      </div>
    );
  }
}
export default MusicPlay;