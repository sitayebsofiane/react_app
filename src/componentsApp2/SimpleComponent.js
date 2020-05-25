import React,{ Component} from "react";


class SimpleComp extends Component{


    render(){
        console.log("%c render() DU COMPASANT SIMPLE ","color:blue")
        return(
            <div>
                <span className="blue">SimpleComp </span>{this.props.name}
            </div>
        )
    }
}
export default SimpleComp;