import React, { Component } from 'react';
class ReactOne extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.forward = this.forward.bind(this);
    this.back = this.back.bind(this);
    this.home = this.home.bind(this);
  }
  home() {
    this.props.history.push('/'); 
  }
  back() {
    this.props.history.goBack();
  }
  forward() {
    this.props.history.goForward();
  }
  keyPress(e) {
    if(e.key === "Enter"){ // 当点击回车键的时候
      console.log(e.target.value);
      e.target.value = '';
    }
  }
  submit(e) {
    console.log(e.target.sex.value); // name值
    console.log(e.target.age.value);
    e.preventDefault();// 自动刷新页面
  }
  render() {
    let card = [1,3,2,4,5,6];
    let right = card.filter((elem) => {
     return Number(`${elem}`) > 3
    });
    console.log(right);
    let obj = [{
      name:'zhoufangbing',
      age: 18
    },{
      name:'fangbing',
      age: 18
    },{
      name:'zhoubing',
      age: 20
    }];
    let info = [{
      name:'张亮',
      age: 18
    },{
      name:'张骑',
      age: 8
    },{
      name:'荆鱼',
      age: 20
    }];
    let objOk = obj.filter( (elem) => {
      return elem.age === 18
    });
    let objOkA = info.filter( (elem) => {
      return elem.name.indexOf("张") !== -1; // 名字里面包含张的
    });
    console.log(objOk);
    console.log(objOkA);
    return (
      <div>
        (一)filter的用法,要有return<br/>
        console.log里面<br/>
        (二)显示插入一个空格<br/>
        空{' '}格<br/>
        空格<br/>
        (三)解析标签dangerouslySetInnerHTML<br/>
        <span
          dangerouslySetInnerHTML={{__html:'aa<br/>aa'}}
        /><br/>
        (四)表单提交,按钮类型type='submit'
        <form onSubmit={this.submit}>
          姓名：<input type="text" name='sex'/><br/>
          年龄：<input type="text" name='age'/><br/>
          <button type='submit'>submit</button>
        </form>
      （五）键盘事件监听<br/>
      <input 
        type="text"
        onKeyPress={this.keyPress}
      /><br/>
      (六)在代码中更改路由history
      <button onClick={this.forward}>前进</button>
      <button onClick={this.back}>后退</button>
      <button onClick={this.home}>重定向至首页</button>
      </div>
    )
  }
}
export default ReactOne;