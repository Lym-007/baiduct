import React,{Component} from "react"
 import "./homeStyle.scss"
 import Header from "../common/Header"
 import {NavLink} from "react-router-dom"
 import List from "./list/List"
import Find from "./find/Find"
import Recommen from "./recommen/Recommen"
export default function HomeUI(props){
    let a=1;
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
                    <li onClick={props.changeUI.bind(this,0)}>推荐</li>
                    <li onClick={props.changeUI.bind(this,1)}>分类</li>
                    <li onClick={props.changeUI.bind(this,2)}>榜单</li>
                </nav>
                 {props.data.homeIndex===0?<Recommen></Recommen>:""}
                { props.data.homeIndex===1?<Find></Find>:""}
                {props.data.homeIndex===2?<List></List>:""}
            </div>
        </div>
        
    );
}