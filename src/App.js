import React, { Component } from 'react';
import Cars from './components/Cars';
import Maman from './components/Maman';

class App extends Component{
 
    render(){
      return (
        <div>
          <Cars/>
          <Maman/>
        </div>
    );
    }
  }
export default App;