import React,{Component} from "react"
 import "./historyStyle.scss"
 import Header from "../common/Header"
 import {NavLink} from "react-router-dom"
export default function HistoryUI(props){
    return (
        <div>
            <Header>
                 <NavLink className="tab" to="/home">首页</NavLink>
                 <h1>最近播放</h1>
                 <span></span>
                 <p className="tab">清空</p>
            </Header>
            <div className="page" id="history">
                <h1>最近播放</h1>
            </div>
        </div>
        
    );
}