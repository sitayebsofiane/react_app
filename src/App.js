import React, { Component } from 'react';
import Cars from './components/Cars';

class App extends Component{
  state={
    titre:'Catacalogue'
  }
    
    render(){
      return (
        <div>
          <Cars titre={this.state.titre}/> 
          
        </div>
    );
    }
  }
export default App;