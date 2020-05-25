import React,{ PureComponent} from "react";


class PureComp extends PureComponent{


    render(){
        console.log("%c render() DU COMPASANT PURE ","color:green")
        return(
            <div>
                <span className="red">pureComp </span>{this.props.name}
            </div>
        )
    }
}
export default PureComp;