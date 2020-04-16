import React, { Component } from 'react';
import Car from './Car';

class Cars extends Component{
    render(){
      return (
        <div>
        <h1>{this.props.titre}</h1>
          <Car >Ford</Car>
          <Car color="yellow">Toyota</Car>     
          <Car color="whilte">Renault</Car>
          <Car color="whilte"></Car>     
        </div>
    );
    }
  }
export default Cars;