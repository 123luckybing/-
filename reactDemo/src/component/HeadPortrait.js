import React, { Component } from 'react';
import { Link } from "react-router-dom";
class HeadPortrait extends Component {
  constructor() {
    super();
    this.filesPic = this.filesPic.bind(this);
    this.state = {
      typeError: true
    }
  }
  filesPic(e) {
    // 判断一下e.target.files[0] === undefined
    // 解决用户点击选择文件后，又点击取消的报错问题
    if(e.target.files[0] === undefined) {
      return false
    } else {
      // console.log(e.target.files); 输出上传图片的信息(图片信息都在里面了)
      // 设置上传图片的格式,利用图片名称后缀来鉴定图片是否符合要求
      let picType = ['jpg','gif','bmp','png'];
      // 把照片名称用.分开
      let arr = e.target.files[0].name.split('.');
      // 获取后缀名称
      let typeName = arr[arr.length-1];
      // 判断后缀名称是否在上传图片的格式范围内
      let  typeError = (picType.indexOf(typeName) === -1) ? false:true;
      this.setState({
        typeError
      });
    }

     // 当图像文件加载后,转换成一个data:URL,传递到onload回调函数中:

     //1. FileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件。
    let oFReader = new FileReader();
    // 2. oFReader.readAsDataURL 异步读取文件内容，结果用data:url的字符串形式表示
    oFReader.readAsDataURL(e.target.files[0]);
    // 3.	onload 当读取操作成功完成时调用
    oFReader.onload =(e) => { 
      // e.target.result 读取文件的结果，存在result字段里面
      // 把结果赋值给图片的src
      this.refs.pic.src = e.target.result;
    };
  }
  render() {
    const {typeError} = this.state;
    return(
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <span>添加图片:</span><br/>
        {/* 显示图片 */}
        <img src="" 
          ref = 'pic'
          alt="" 
          style={{
            width: '50%',
          }}
        />
        <input
          type="file"
          // 监听onChange事件，目的:图片上传前预览，将选择的图片放在网页中
          //通过监听change事件我们可得知用户选择的文件，并且添加了一个files(e.target.files获取集合)集合，
          // 集合中将包含file对象，每个file对象对应着一个文件(选择的文件)。
          // 并且都有以下只读属性name,size,type,lastModifiedDate.
          onChange={this.filesPic}
        />
        {
          typeError ? '' :(<div style={{color:'red'}}>图片格式错误，请重新上传</div>)
        }
      </div>
    );
  }
}
export default HeadPortrait;