import React, {PureComponent} from "react";

export class PureComp extends PureComponent{
    render() {
        console.log("Pure component render");
        return (
            <div>
                This is a Pure Component {this.props.name}
            </div>
        )

    }

}

export default PureComp
