import React, { Component } from 'react';

class Users extends Component {

  render(){
      const  {name,age}=this.props;
    //   console.log({name,age});
    return(
        <div>
            <p>Chanteur: {name},{age} ans </p>
        </div>
    )
  }
}
export default Users;