import React, {Component} from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class ParentComp extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "Simplilearn"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Simplilearn"
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                This is a parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )

    }

}

export default ParentComp
