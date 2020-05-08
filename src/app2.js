
import React, { Component } from 'react';
import Bootstrap from './componentsApp2/Bootstrap';

class App2 extends Component {
    state = {
      name:"toto"
    }
    modifier=()=>{
      this.setState({
        name:"lili"
      })
    }
    render() {
      return (
        <>
         <Bootstrap name={this.state.name}/>
         <button onClick={this.modifier}>modifier</button>
        </>
      );
    }
  }
  export default App2;