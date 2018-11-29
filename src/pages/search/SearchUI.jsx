import React,{Component} from "react"
 import "./searchStyle.scss"
 import {NavLink} from "react-router-dom"
export default function SearchUI(props){
    return (
        <div>
            <NavLink className="tab" to="/home">取消</NavLink>
            <div className="page" id="search">
                <h1>搜索</h1>
            </div>
        </div>
    );
}