import React,{Component} from "react"
import HomeUI from "./HomeUI"
export default class Home extends Component{
    constructor(){
        super();
        this.state={
            homeIndex:0
        }
    }

    render(){
        return (
            <HomeUI data={this.state} changeUI={this.changeUI.bind(this)}></HomeUI>
        );
    }

    changeUI(index){
        console.log(index)
        this.setState({
            homeIndex:index
        })
    }
}