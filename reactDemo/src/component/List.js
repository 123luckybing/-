import React, { Component } from 'react';
import { Link } from "react-router-dom";
class List extends Component {
  render() {
    var colors = ['yello'];
    colors.push("red", "green");
    console.log(colors);
    let isAlert = false;
    let isAlert2 = true;
    let arr = [1,undefined,3];
    console.log(arr.join("or"));
    var i = 0;
    do {
      i += 2;
     } while (i < 10);
     console.log(i);

     let person = [{
       name:'zhangsan',
       age: 21
     },{
       name: 'wangwu',
       age: 14
     },{
       name: 'liuliu',
       age: 17
     }];
     person.sort( (a,b) => {
        return b.age - a.age;
     });
     console.log(person);
    return (
      <div>
        <Link to='/'><button>返回主页</button></Link><br/>
        <h3>(一) 之前主要是以为与或运算符只能用来判断false/true,
          但其实逻辑与操作可以应用于任何类型的操作数，而不仅仅是布尔值
        </h3>
          { 
            isAlert &&  console.log('1')
          }
          { 
            isAlert2 &&  console.log('1')
          }
          弹出1,isAlert 为 true , 直接执行第二个操作数
          { 
            isAlert ||  console.log('1')
          }
          { 
            isAlert2 || console.log('12')
          }
      </div>
    )
  }
};

export default List;