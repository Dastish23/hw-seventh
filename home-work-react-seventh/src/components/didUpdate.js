import React from "react";


 export default class Update extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            counter:0
        }
    }


    componentDidUpdate() {
        console.log("times")
    }


    render() {
        return (
            <div>
                <button onClick={() =>this.setState({counter: this.state.counter+1})}>Click bro {this.state.counter}</button>
            </div>
        )
    }
 }