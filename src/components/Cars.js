import React, { Component } from 'react';
import Car from './Car';

class Cars extends Component{
     state={
        voitures:[
        {name:'Ford',color:'red',year:2001},
        {name:'mercedes',color:'black',year:2002},
        {name:'peugeot',color:'green',year:2003}
        ]

     }
      render(){
      return (
        <div>
        <h1>{this.props.titre}</h1>
          <Car color={this.state.voitures[0].color} year={this.state.voitures[0].year}>{this.state.voitures[0].name}</Car>
          <Car  color={this.state.voitures[1].color} year={this.state.voitures[1].year}>{this.state.voitures[1].name}</Car>     
          <Car  color={this.state.voitures[2].color} year={this.state.voitures[2].year}>{this.state.voitures[2].name}</Car>
             
        </div>
    );
    }
  }
export default Cars;