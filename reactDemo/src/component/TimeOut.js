import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TimeOut extends Component {
  constructor() {
    super();
    this.state = {
      day:'',
      hour:'',
      second:'',
    }
    this.time = this.time.bind(this);
  }

  time() {
    let now = new Date();
    let endTime = new Date(2019,6,1,0,0,0);
    let secondTime = Math.ceil((endTime.getTime() - now.getTime())/1000); // 距离大学毕业的秒数
    this.setState({
      day: Math.ceil(secondTime/(24*60*60)), // 秒转化成天
      hour: Math.ceil(secondTime/(24*60*60*24)), // 秒转化成时
      minute: secondTime,
    });
  }

  componentWillMount() {
    setInterval(this.time,1000);
  }

  render() {
    let now = new Date();
    let endTime = new Date(2019,6,1,0,0,0);
    let secondTime = Math.ceil((endTime.getTime() - now.getTime())/1000); // 距离大学毕业的秒数
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        2018-7-21 344 day 15 hour<br/>
        {
          secondTime < 0 ? 
          (<div>想啥呢，早就毕业了！</div>)
          :(
            <div>距离大学毕业还剩<br/>
              {this.state.day} 天 {this.state.hour} 时 <br/>
              总计: {this.state.minute} 秒
            </div>
            )
          }
        
      </div>
    );
  }
}
export default TimeOut;