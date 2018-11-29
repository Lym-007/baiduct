import React,{Component} from "react"
import {NavLink} from "react-router-dom"

export default class Header extends Component {
   
    render() {
         console.log(this.props.children)
        return (<div className="tabs">
                   <div className="left">
                        {this.props.children[0]}
                    </div>
                    {this.props.children[1]}
                    <div className="right">
                        {this.props.children[2]}
                        {this.props.children[3]}
                    </div>
                </div>)
    }
}
// export default function Header(props){

//     return (
//         <nav className="tabs">
//             <div className="left">
//                  <NavLink className="tab" to="/history">最近播放</NavLink>
//             </div>
//             <h1>百度畅听</h1>
//             <div className="right">
//                 <NavLink className="tab" to="/search">搜索</NavLink>
//                 <NavLink className="tab" to="/mine">我的</NavLink>
//             </div>
//         </nav>
//     )
      
// }