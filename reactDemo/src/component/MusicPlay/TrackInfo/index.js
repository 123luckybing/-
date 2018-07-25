import './index.css';
import React, { Component } from 'react';
class TrackInfo extends Component {
  constructor() {
    super();
    this.state = {
     picImg: '',
     name: '',
     singer: '',
    }
  }

  render() {
     // index.js调接口有延迟，所以得写个setTimeout
     // setState值改变了，是重新渲染render();
     setTimeout(() => {
      const index = this.props.index;
      const songList = this.props.songList;
      const singer  = songList[index].artists.map((elem,index) => {
        return (
        <span key={index}>{elem.name} </span>
        )
      });
      this.setState({
        picImg: songList[index].album.picUrl,
        name: songList[index].name,
        singer,
      });
    }, 1000);
    const {picImg, name,singer} = this.state;
    return (
      <div>
        <div className="bg">
          <img src={picImg} alt=""/>
        </div>
        <div className="songInfo">
          <div>歌曲名称：{name}</div>
          <div>歌曲演唱：{singer}</div>
        </div>
      </div>
    );
  }
}
export default TrackInfo;