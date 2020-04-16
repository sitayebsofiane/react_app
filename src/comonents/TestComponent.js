import React, { Component } from 'react';

class TestComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    addOne() {
        this.setState({
            count: this.state.count + 1
        });
    }
    removeOne() {
        this.setState({
            count: this.state.count - 1
        });

    }

    render() {
        let variable = '____jouter et soustraire 1____';
        return (
            <div className="container">
                <div className="row">

                    <h1 className="col-md-12"> {this.props.nomProp} {variable} Mon compteur :{this.state.count}</h1>
                    <div className="col-md-12">
                        <button onClick={() => this.addOne()}>Ajouter 1</button>
                        <button onClick={this.removeOne.bind(this)}>Enlever 1</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default TestComponent;