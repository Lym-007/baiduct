import React, { Component } from 'react';
import {BrowserRouter,Route,NavLink,Redirect,Switch} from "react-router-dom"
import Home from "./pages/home/Home"
import Search from "./pages/search/Search"
import Mine from "./pages/mine/Mine"
import History from "./pages/history/History"
import "./App.scss"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
          <Switch>
              <Route path="/" exact render={()=>{
                  // 重定向到home
                  return <Redirect to="/home"></Redirect>
              }}/>
              <Route  path="/home" component={Home}></Route>
              <Route path="/history" component={History}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/mine" component={Mine}></Route>
          </Switch>
          <nav className="tabs">
            <div className="left">
              <NavLink className="tab" to="/history">最近播放</NavLink>
            </div>
            <h1>百度畅听</h1>
            <div className="right">
              <NavLink className="tab" to="/search">搜索</NavLink>
              <NavLink className="tab" to="/mine">我的</NavLink>
            </div>
          </nav>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
