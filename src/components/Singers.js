import React, { Component } from 'react';

class Users extends Component {

  render(){
      const  {name,age,statut}=this.props;
      //les condition en react
    return statut && <p>Chanteur: {name},{age} ans </p>
    
  }
}
export default Users;