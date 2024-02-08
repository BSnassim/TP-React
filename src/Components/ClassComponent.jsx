import React from "react";

export default class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            val: "Hello val state 1",
            obj: {
                valobj: 10
            }
        }
    }
    render() {
        return(
        <>
        <h1 style={{color:"gold"}}>Class Component {this.props.name}</h1>
        <p>{this.state.val} {this.state.obj.valobj}</p>
        </>
        )
    }
}