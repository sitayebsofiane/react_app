import React,{ Component, Fragment } from "react";
import SimpleComp from "./SimpleComponent";
import PureComp from "./PureComponent";
import FunctionComp from "./FunctionComp";
import './../css/myCss.css'


class ParentComp extends Component{

    constructor(props){
        super(props)
        this.state={
          name:'SpiderMan'
        }
      }

    shouldComponentUpdate(nextProps,nextState){
        console.log("je suis dans shouldComponentUpdate")
        console.log(this.state)
        console.log(nextState)
        return true
        //return this.state.name !== nextState.name
    }
    changerEnBatman =()=>{
        this.setState({
            name:'Batman'
        })
    }
   
    render(){
        console.log("%c render() DU COMPASANT PARENT ","color:red")
        return(
            <Fragment>
                <p><span className="purple">Parent Component </span>{this.state.name}</p>
                <SimpleComp name={this.state.name} />
                <PureComp name={this.state.name} />
                <FunctionComp name={this.state.name} />
                <button onClick={this.changerEnBatman}>Changer en Batman</button>
            </Fragment>
        )
    }
}
export default ParentComp;