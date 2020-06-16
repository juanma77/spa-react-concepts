import React, { Component } from "react";

class FirstComponent extends Component {

    render() {
        return (
            <p>Componente A</p>
        )
    }

}

class SecondComponent extends Component {

    render() {
        return (
            <p>Componente B</p>
        )
    }
}


export default class ConditionalComponent extends Component {

    useRenderingConditional = (showFirstComponent) =>{
        if( showFirstComponent ) {
            return <FirstComponent/>
        } else {
            return <SecondComponent/>
        }
    }

    constructor(){
        super();
        this.state = { showFirstComponent: true };
        
    }

    render(){

        return (
            <div>
                <h1>Renderizado Condicional</h1>
                <div>
                    <p>Llamando a la función useRenderingConditional: </p>
                    <p> { this.useRenderingConditional(this.state.showFirstComponent) } </p>
                </div>

            </div>
        )
    }

}