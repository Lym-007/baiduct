import React,{Component} from "react"
 import "./homeStyle.scss"
 import Header from "../common/Header"
 import {NavLink} from "react-router-dom"
export default function HomeUI(props){
    return (
        <div>
             <Header>
                 <NavLink className="tab" to="/history">最近播放</NavLink>
                 <h1>百度畅听</h1>
                 <NavLink className="tab" to="/search">搜索</NavLink>
                 <NavLink className="tab" to="/mine">我的</NavLink>
             </Header>
            <div className="page" id="home">
                <nav className="h_tabs">
                    <li>推荐</li>
                    <li>分类</li>
                    <li>榜单</li>
                </nav>
            </div>
        </div>
        
    );
}