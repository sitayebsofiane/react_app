
import React, { Component } from 'react';
import styled from 'styled-components';
const Titre = styled.h1`
            color:red; 
            font-size:50px;
                        `
class Bootstrap extends Component{
   
    constructor(props) {
        super(props);
        this.state={compteur:10, titre:''};
        console.log("je suis dans le consturcteur")
    }
    static getDerivedStateFromProps(props,state){
        console.log('%c getDerivedStateFromProps() lancer','color: red; font-size:20px; background:yellow')
        console.log(props,state)
        return null
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate ");
        return true;
    }
    // il sera executer apres le rendre
    componentDidMount() {
        const intervalId = setInterval(this.diminuerCompteur, 1000);
           
    } 
    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
        console.log(this.state);
    }
    // Diminue le compteur jusqu'à 0
    diminuerCompteur = () =>{
        if(this.state.compteur>0){
            this.setState({
                compteur:this.state.compteur-1
            });
            if(this.state.compteur===0)
            this.setState({
                titre:'BOOM'
            })  
        }  
    }
    

    render(){
        console.log(this.state.titre)
        const titreAffichage=this.state.titre?(<Titre>{this.state.titre}</Titre>):(<Titre>Commentaire Bootstrap <span>{this.state.compteur}</span> seconde(s)....</Titre>);
        return( 
            <> 
                {titreAffichage}
                <button className="btn btn-primary" > {this.props.name} </button>
            </>
        )
    }

}
export default Bootstrap;