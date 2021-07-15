// import React from 'react';
import ReactDOM from 'react-dom';

/**
 * JSX只是react提供的一个语法糖
 * 老的版本需要引入react 变量
 * 但是新的版本不需要引入 
 * import React from 'react';
 * react 元素是构建React 应用的最小单位
 * 虚拟DOM
 * type:元素类型
 * props:属性
 * jsx 在执行（函数调用）过程中，就是执行了一个创建元素的工厂函数
 * key:同一个父亲的不同儿子
 * ref：获取真的Dom
 * 组件是一个函数，接受props,返回一个react元素
 */
ReactDOM.render(
  <h1>hello</h1>,document.getElementById('root')
)