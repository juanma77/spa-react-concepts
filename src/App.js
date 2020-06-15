import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// React es declarativo y reactivo; declarativo porque le decimos qué renderizar pero no cómo y reactivo porque reacciona a los cambios en los componentes. El flujo de información en React es unidireccional, esto quiere decir que los datos fluyen sólo de componentes padres a componentes hijos, y cuando pasamos propiedades de hijos a padres, cada vez que un dato cambia en el padre también lo hará en el hijo
class Hello extends Component {

  // Render es para pintar el elemento en pantalla
  render(){
    return (
      <h2>{ this.props.title }</h2>
    );
  }
}

class Text extends Component {
  render(){

    // Esto es una desestrucutración para poder utilizar el "this.props" en lugar de escribir el nombre de la variable arrayNumbers o del método multiply
    const { arrayNumbers, myBoolean, multiplyFunction, objectsInfo, title } = this.props;

    const myBooleanText = myBoolean ? 'True' : 'False';

    //const mappedArrayNumbers = arrayNumbers.map( number => number*2 );

    const mappedArrayNumbers = arrayNumbers.map(multiplyFunction);

    return (
      <div className="main-div">
        <p>{ this.props.myText }</p>
        <p>{ this.props.myNumber }</p>
        <p>{ JSON.stringify(this.props.myBoolean) }</p>
        <p>{ myBooleanText } </p>  
        <p>{ this.props.arrayNumbers.join(' , ') }</p>

        <p>{ mappedArrayNumbers.join(' , ') }</p> 
        <p>{ objectsInfo.key }</p>
        { title }
        <p>These are my Default Props:  { this.props.myDefaultProps }</p>   

      </div>
    );
  }
}

class Contador extends Component {

  // El state es inmutable, asíncrono y sólo lo podemos actualizar utilizando el método setState()
  constructor(){
    super()
    this.state = { contador: 1 }

    setInterval(() =>{
      this.setState({ 
        contador : this.state.contador + 1
      });
    }, 1000);
  }

  // Una nueva actualización de Javascript permitirá inicializar el state como un Class Field; para así no usar más el constructor y el super 
  // state = { contador: 10 };

  render(){

    //const contador = 0; 

    // Aquí renderizamos el componente hijo ContadorHijo y le mandamos como propiedad "propiedadHijo" con el valor que tiene this.state.contador aquí en el componente Contador 
    return (
      <div> 
        <p>Contador del componente padre: </p>
        { this.state.contador }

        <ContadorHijo propiedadHijo = { this.state.contador }/>
      </div>
    )
  }
}

class ContadorHijo extends Component {

  // La propiedad "propiedadHijo" que enviamos desde el componente padre Contador a este componente hijo ContadorHijo la recibimos aquí; debe de tener el mismo nombre en un componente y otro. 
  render(){
    return (
      <div>
        <p>Contador del componente hijo:</p>
        { this.props.propiedadHijo }
      </div>
    )
  }

}

Text.defaultProps = {
  myDefaultProps : 'Here are my default props!'
};

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <Hello title='Hello from props!'/>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Text myText='Este es mi texto' 
        myNumber={ 2 } 
        myBoolean={ true } 
        arrayNumbers={[ 2, 3, 10 ]}
        objectsInfo= {{ key: 'First value', key2: 'Other value' }}
        multiplyFunction = { (number)=> number * 4 }
        title = { <h1>Este es mi título</h1>   } 
        myDefaultProps= 'Estas props por defecto han cambiado ya que están en otro componente'/> 

        <Contador/>

      </div>
    );
  }
}

export default App;
