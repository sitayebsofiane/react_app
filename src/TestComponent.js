import React, { Component } from 'react';

class TestComponent extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    addOne(){
        this.setState({
          count: this.state.count+1  
        });
    }
    removeOne(){
        this.setState({
            count:this.state.count-1
        });
       
    }
    
    render(){
        let variable='____chaine de caractere____';
        return(
        <div className="App">
            <div className="row">
               
                <h1  className="col-md-6"> {this.props.nomProp} {variable} Mon compteur :{this.state.count}</h1>
                <div  className="col-md-6">
                    <button onClick={()=>this.addOne()}>Ajouter 1</button>
                    <button onClick={this.removeOne.bind(this)}>Enlever 1</button>
                    </div>
            </div>
        </div>
        );
    }
}
export default TestComponent;