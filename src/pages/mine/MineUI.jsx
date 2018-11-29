import React,{Component} from "react"
 import "./mineStyle.scss"
 import Header from "../common/Header"
 import {NavLink} from "react-router-dom"
export default function MineUI(props){
    return (
        <div>
            <Header>
                 <NavLink className="tab" to="/home">首页</NavLink>
                 <h1>我的畅听账户</h1>
                 <span></span>
                 <span></span>
            </Header>
            <div className="page" id="mine">
                <h1>我的</h1>
            </div>
        </div>
        
    );
}