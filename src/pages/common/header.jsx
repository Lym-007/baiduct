import React,{Component} from "react"
export default class Header extends Component {
   
    render() {
        //  console.log(this.props.children)
        return (
                <div className="tabs">
                        <div className="left">
                            {this.props.children[0]}
                        </div>
                        {this.props.children[1]}
                        <div className="right">
                            {this.props.children[2]}
                            {this.props.children[3]}
                        </div>
                </div>
        )
    }
}