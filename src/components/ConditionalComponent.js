import React, { Component } from "react";

class FirstComponent extends Component {

    render() {
        return (
            <div>
                 <p>Componente A</p>
            </div>
        )
    }

}

class SecondComponent extends Component {

    render() {
        return (
            <div>
                 <p>Componente B</p>
            </div>
        )
    }
}

class LoginButton extends Component {

    render(){
        return (
            <div>
                <button className="btn btn-primary">
                    Iniciar sesión 
                </button>
            </div>
        )
    }

}

class LogoutButton extends Component {

    render() {
        return (
            <div>
                <p>¡Bienvenido Usuario!</p>
                <button className="btn btn-danger">
                    Cerrar sesión 
                </button>

            </div>
        )
    }
}

/*
const useRenderingConditional = (showFirstComponent) =>{
    if( showFirstComponent ) {
        return <FirstComponent/>
    } else {
        return <SecondComponent/>
    }
}*/

// Aquí usamos el renderizado condicional con una expresión ternaria 
export default class ConditionalComponent extends Component {


    constructor(){
        super();
        this.state = { showFirstComponent: true, isUserLogged: true };
        
    }

    render(){
        return (
            <div>
                <h1>Renderizado Condicional</h1>
                <div>
                    <p>Llamando a la función useRenderingConditional: </p>
                    <p> 
                        { this.state.showFirstComponent 
                        ? <FirstComponent/>
                        : <SecondComponent/>  } 
                    </p>

                    <p>
                       { this.state.isUserLogged ? <LogoutButton/> : <LoginButton/> } 
                        
                    </p>        

                </div>

            </div>
        )
    }

}