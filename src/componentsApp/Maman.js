import React, { Component, Fragment } from 'react';
import Enfant from './Enfant';
class Maman extends Component{
    state={
        messageMaman:null,
        messageEnfant:null

    }
    orderMaman =()=>{
        if(!this.state.messageMaman)
            this.setState({
                messageMaman:'va ranger ta chambre'
            })
        else
            this.setState({
                messageMaman:''
            })
    }

    responseEnfant=()=>{
        this.setState({
            messageEnfant:'ok'
        })
    }
    render(){
        return(
            <Fragment>
              <h1>Maman</h1>
              <button onClick={this.orderMaman}>ordre de la mère</button>
              <p>{this.state.messageMaman}</p>
              <Enfant name='bruno' responseEnfant = {this.responseEnfant} leState={this.state}/>
            </Fragment>
        )
    }
}
export default Maman;