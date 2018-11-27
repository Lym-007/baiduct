import React,{Component} from "react"
 import "./homeStyle.scss"
export default function HomeUI(props){
    return (
        <div className="page" id="home">
            <nav className="h_tabs">
                <li>推荐</li>
                <li>分类</li>
                <li>榜单</li>
            </nav>
        </div>
    );
}