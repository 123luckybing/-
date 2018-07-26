import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import loadingPic from '../Img/loading.gif';
class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      loading: 'block',
      loadingTwo: 'block',
      loadingThree: 'block',
      num: 0,
    }
    this.success = this.success.bind(this);
    this.loadingSuccess = this.loadingSuccess.bind(this);
  }

  loadingSuccess() {
    this.setState({
      num: this.state.num + 1,
    });
    if(this.state.num === 3) {
      setTimeout( ()=> {
        this.setState({
          loadingThree: 'none',
        });
      },100);
    }
  }

  success() {
    this.setState({
      loadingTwo: 'none',
    });
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: 'none',
      });
    },2000);
  }
 // componentWillMount -> render -> componentDidMount
  render() {
    const { loading, loadingTwo, loadingThree, num } = this.state;
    const range = (num / 4) *100;
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <h3>(一)进度条样式</h3>
        <p>思路:先把loading加在整个网页的上方(作为遮罩)，position:absolute;top:0;left:0;z-index:10;background:#fff;
          把gif动图放在中间,先loading显示,setTimeout 2s,给图片2s的时间去加载。（并不切合实际）
        </p>
        <p>弊端：这种方法比较暴力，且不容易把握时间（不推荐）</p>
          <div className="first">
            <div 
              className="loading"
              style={{
                display: `${loading}`
              }}
              >
              <img src={loadingPic} alt=""/>
            </div>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532500322190&di=361c18992ad77bdcefd79af32ac30793&imgtype=0&src=http%3A%2F%2Fwww.zcool.com.cn%2Fcommunity%2F037dd30582481f7a84a0d304f0db5d6.jpg" alt="" className='image'/>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532500322997&di=2829ff46ca8f5bd77317066080001b78&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fsoftbbs%2F1204%2F13%2Fc0%2F11240831_1334309257128_7_1024x1024soft.jpg" alt="" className='image'/>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532500322997&di=351f39ce07b6448c5646e92fb7e30c24&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2Fpicshow%2F0x0%2F20120210%2F2012021016283386632.jpg" alt="" className='image'/>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532500322996&di=1ca789833c686ebd8e4d5e99cae9d561&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F32fa828ba61ea8d3b5ea2502910a304e241f58ef.jpg" alt="" className='image'/>
          </div>

          <h3>(二)真实进度条，等内容完全加载完毕，再显示在用户面前</h3>
            <p 
            style ={{color: 'red'}}
            >img的onLoad事件：等图片加载完成后执行的操作,加载完成后把遮罩display: none;</p>
          <div className="first">
            <div 
              className="loading"
              style={{
                display: `${loadingTwo}`
              }}
              >
                <img src={loadingPic} alt=""/>
              </div>
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532500322190&di=361c18992ad77bdcefd79af32ac30793&imgtype=0&src=http%3A%2F%2Fwww.zcool.com.cn%2Fcommunity%2F037dd30582481f7a84a0d304f0db5d6.jpg"
                alt=""
                onLoad = {this.success}
                // img的onLoad事件：等图片加载完成后执行的操作
                className='Image'
              />
            </div>
            <h3>(三)css3自制进度条条形</h3>
            <div className='demo'>
              <ul className='demo-wrapper'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <h3>(四)css3自制进度条圆点型</h3>
            <div className="demo">
              <ul className="circle-wrapper">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <h3>(五)定位在头部的进度条</h3>
              整个页面分成几个部分,当加载完一个部分，改变一下滚动条的宽度
            <h3>(六)实时获取加载数据的进度条</h3>
            <p>图片加载成功会调用onload事件，图片加载失败会触法onError事件</p>
            <div>
              图片资源加载进度:可以判断出单个图片资源是否加载完成了，
              每加载成功一个,num加一,
              在加上蒙版和百分比字样，很容易实现载入的百分比效果。
              在页面全部加载完成后，再隐藏蒙版，
              即可实现比较友好的loading效果了
            </div>
            <div className="first">
              <div 
                className="loading"
                style={{
                  display: `${loadingThree}`
                }}
                >
                <div className='circle-progress'>{range}%</div>
              </div>
              <img
                onLoad={this.loadingSuccess}
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532586852160&di=64a26bf4aee9d03789535a259dce3ead&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017a2a56d41b046ac7252ce6eee0f8.jpg%401280w_1l_2o_100sh.jpg" 
                alt="" 
                className='image'
              />
              <img
                onLoad={this.loadingSuccess}
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532500322996&di=1ca789833c686ebd8e4d5e99cae9d561&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F32fa828ba61ea8d3b5ea2502910a304e241f58ef.jpg" 
                alt="" 
                className='image'
              />
              <img
                onLoad={this.loadingSuccess}
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=417572675,1976988667&fm=27&gp=0.jpg" 
                alt="" 
                className='image'
              />
              <img
                onLoad={this.loadingSuccess}
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3274776093,4175049969&fm=27&gp=0.jpg" 
                alt="" 
                className='image'
              />
            </div>
          </div>
    );
  }
}
export default ProgressBar;