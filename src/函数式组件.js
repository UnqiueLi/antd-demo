import React, { Component } from 'react'
import reactDom from 'react-dom'
import ReactDOM from 'react-dom'

/**
 * 组件分为原生组件he自定义组件
 * 自定义组件 类型是一个函数，类组件的父类component的原型上有一个属性isReactComponent={}
 * 自定义组件的名称必须是大写字母开头
 * 自定义组件返回值有且只能是一个根元素
 * 类组件：父组件传过来的属性，自己内部的状态
 * 
 */
class ClassComponent extends React.Component{
    render(){
        return (
            <h1 style={{color:'red'}} className="title"><span>heelo</span></h1>
        )
    }
}

reactDom.render(<ClassComponent />,document.getElementById('id'))