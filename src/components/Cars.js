import React, { Component, Fragment } from 'react';
import Car from './Car';

class Cars extends Component{
     state={
        voitures:[
        {name:'Ford',color:'red',year:2001},
        {name:'mercedes',color:'black',year:2002},
        {name:'peugeot',color:'green',year:2003}
        ],
        titre:'catalogue'

     }
     addTenYears=()=>{
      const updatedState = this.state.voitures.map((param)=> param.year+=10);
       this.setState({
        updatedState
       })
     }
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render(){
      return (
        <Fragment>
        <h1>{this.capitalizeFirstLetter(this.state.titre)}</h1>
        <table className="table">
        <button onClick={this.addTenYears}>+ 10 ans</button>
        <tr>
          <th>Marque</th>
          <th>Couleur</th>
          <th>Annee</th>
        </tr>
             {
               this.state.voitures.map((voiture,index)=>{
                 return(
                   <Fragment key={index}>
                    <Car nom = {voiture.name} color={voiture.color}  year={voiture.year}/>
                   </Fragment> 
                 )
               })
             }
        </table>
        </Fragment>
    );
    }
  }
export default Cars;