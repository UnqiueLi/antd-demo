import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={data:new Date()} //唯一可以给状态的是构造函数
    }
         // 类的属性，这样写函数里的this永远指向组件的实例
         tickk=()=>{

        }
    render(){
        return (
            <div></div>
        )
    }
}