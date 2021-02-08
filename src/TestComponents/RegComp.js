import React, {Component} from "react";

export class RegComp extends Component{
    render() {
        console.log("Regular component render");
        return (
            <div>
                This is a regular Component {this.props.name}
            </div>
        )

    }

}

export default RegComp
