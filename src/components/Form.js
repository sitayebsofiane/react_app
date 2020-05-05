import React, { Component } from 'react';
import Alger from './Alger';
import './../css/myCss.css' ;
import styles from './../css/myCss.module.css';
class Form extends Component {

    state = {
        username: '',
        color:'',
        colors:["","red","blue","green","black","purple","yellow"],
        coment:'',
        size:50
    }
    handlePseudo = (e) => {
        console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }
    handleColor = (e) =>{
        console.log(e.target.color);
        this.setState({
            color: e.target.value,
        })
    }
    handleComment = (e)=>{
        this.setState({
            coment:e.target.value 
        })
    }
    handleSubmitForm = (e)=>{
        e.preventDefault();
        console.log(`username:${this.state.username} color:${this.state.color} coment:${this.state.coment} size:${this.state.size}`)
    }
    handleSize = (e)=>{
        this.setState({
            size:e.target.value 
        })
    }
    render() {
        const myClass=this.props.head?('blue'):('red');
        return (
            <>
                <Alger />
                <h1 style={ {color :this.state.color, fontSize:this.state.size+'px'} }>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>
                    <div>
                        <label className="blue">Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                              this.state.colors.map((color,index)=>{
                                return <option key={index} value={color}>{color}</option>
                              })
                            }
                        </select>
                    </div>
                    <div>
                        {/* les module nous permete de gerer le style localement sur un module pas sur l'element enfant */}
                        <label className={styles.vert}>Taille en pixel</label>
                        <input type="number" value={this.state.size} onChange={this.handleSize}/>
                    </div>
                    <div>
                        <textarea value={this.state.coment} onChange={this.handleComment}></textarea>
                    </div>
                    <div>
                        <p className={`${myClass} bigFont`}>je suis rouge ou blue</p>
                    </div>
                    <button className="btn btn-primary">Valider</button>
                </form>
            </>
        )
    }
}
export default Form;