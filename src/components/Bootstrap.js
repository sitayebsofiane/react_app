
import React, { Component } from 'react';
import styled from 'styled-components';
const Titre = styled.h1`
            color:red; 
            font-size:80px;
                        `
class Bootstrap extends Component{
   
    constructor(props) {
        super(props);
        this.state={compteur:10, titre:'BOOM'};
       
    }

    // Diminue le compteur jusqu'à 0
    diminuerCompteur = () =>{
        if(this.state.compteur>1)
        this.setState({
            compteur:this.state.compteur-1
        });
        else{
            clearInterval(this.interval);
            this.setState({
                titre:'BOOM'
            })
        }
    }
    // Diminue le compteur jusqu'à 0
    interval=()=>{setInterval(this.diminuerCompteur,1500);}
    render(){
        { 
            this.interval()
        }
        return( 
            <>
               
                <Titre> Commentaire Bootstrap  <span>{this.state.compteur}</span> seconde(s)... </Titre>
                <button className="btn btn-primary"> Valider </button>
            </>
        )
    }

}
export default Bootstrap;