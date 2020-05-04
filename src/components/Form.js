import React, { Component } from 'react';
import Alger from './Alger'
class Form extends Component {

    state = {
        username: '',
        color:'',
        colors:["","red","blue","green","black","purple","yellow"],
        coment:'',
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
            color: e.target.value
        })
    }
    handleComment = (e)=>{
        this.setState({
            coment:e.target.value
        })
    }
    handleSubmitForm = (e)=>{
        e.preventDefault();
        console.log(`username:${this.state.username} color:${this.state.color} coment:${this.state.coment}`)
    }
    render() {
        return (
            <>
                <Alger />
                <h1 style={ {color :this.state.color} }>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                              this.state.colors.map((color,index)=>{
                                return <option key={index} value={color}>{color}</option>
                              })
                            }
                        </select>
                    </div>
                    <div>
                        <textarea value={this.state.coment} onChange={this.handleComment}></textarea>
                    </div>
                    <button className="btn btn-primary">Valider</button>
                </form>
            </>
        )
    }
}
export default Form;