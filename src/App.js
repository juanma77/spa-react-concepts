import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  ConditionalComponent from './components/ConditionalComponent';

// React es declarativo y reactivo; declarativo porque le decimos qué renderizar pero no cómo y reactivo porque reacciona a los cambios en los componentes. 

// El flujo de información en React es unidireccional, esto quiere decir que los datos fluyen sólo de componentes padres a componentes hijos, y cuando pasamos propiedades de hijos a padres, cada vez que un dato cambia en el padre también lo hará en el hijo.

// Render es para pintar el elemento en pantalla.

// Aquí en este componente hijo llamado Hello recibimos la prop title desde la llamada a este componente que hacemos en el componente padre App; dicho prop debe de tener el mismo nombre .
class Hello extends Component {

  render(){
    return (
      <h2>{ this.props.title }</h2>
    );
  }

}
 
// Esto es una desestrucutración para poder utilizar el "this.props" en lugar de escribir el nombre de la variable arrayNumbers o del método multiply. 

// JSON.stringify es para pasar un valor Javascript (como un true, false, etc.) a formato JSON (para poder utilizarlo como un texto).

// El .join( ',' ) es para separar los elementos de un array con el elemento mandado como argumento; en este caso utilizamos una coma.  

// El .map() hace lo siguiente: para cada elemento del arreglo, manda llamar la función callback que le pasamos como argumento una vez por cada elemento que tengamos en el array y nos devuelve un array nuevo con el nuevo resultado .

class Text extends Component {

  render(){
    const { arrayNumbers, myBoolean, multiplyFunction, objectsInfo, title } = this.props;

    const myBooleanText = myBoolean ? 'True' : 'False';

    //const mappedArrayNumbers = arrayNumbers.map( number => number*2 );
    const mappedArrayNumbers = arrayNumbers.map(multiplyFunction);

    return (
      <div className="main-div">
        <p>
          { this.props.myText }
        </p>
        <p>
          { this.props.myNumber }
        </p>
        <p>
          { JSON.stringify(myBoolean) }
        </p>
        <p>
          { myBooleanText } 
        </p>  
        <p>
          { arrayNumbers.join(' , ') }
        </p>
        <p>
          { mappedArrayNumbers.join(' , ') }
        </p> 
        <p>
          { objectsInfo.firstKey }
        </p>
        <p>
          { objectsInfo.secondKey }
        </p>
        <p>
          { title }
        </p>
        <p>
          Estas son propiedades por defecto:  { this.props.myDefaultProps }
        </p>   
      </div>
    );
  }
}

// El state es inmutable, asíncrono y sólo lo podemos actualizar utilizando el método setState(). Cuando utilizamos props para inicializar el state debemos pasarlas como argumentos en el constructor y en el super.
 
// Una nueva actualización de Javascript permitirá inicializar el state como un Class Field; para así no usar más el constructor y el super.
 
// Aquí renderizamos el componente hijo ContadorHijo y le mandamos como propiedad "propiedadHijo" con el valor que tiene this.state.contador aquí en el componente Contador .

// Si utilizamos props para inicializar el state, siempre debemos de pasar dichas props como argumento en el constructor y en el super 

class Contador extends Component {
 
  constructor(props){
    super(props)
    //this.state = { contador: 1 }
    this.state = { contador: this.props.initialCounter }

    setInterval(() =>{
      this.setState({ 
        contador : this.state.contador + 1
      });
    }, 1000);
  }

  // state = { contador: 10 };

  render(){
    //const contador = 0; 
    return (
      <div> 
        <p>Contador del componente padre: </p>
        { this.state.contador }
        <ContadorHijo propiedadHijo = { this.state.contador }/>
      </div>
    )
  }
}

// La propiedad "propiedadHijo" que enviamos desde el componente padre Contador a este componente hijo ContadorHijo la recibimos aquí; debe de tener el mismo nombre en un componente y otro. 
class ContadorHijo extends Component {
  render(){
    return (
      <div>
        <p>Contador del componente hijo:</p>
        { this.props.propiedadHijo }
      </div>
    )
  }
}

// Estas son props por defecto que ya tienen un valor definido para usarlos 
Text.defaultProps = {
  myDefaultProps : 'Propiedades por defecto inicializadas'
};

Contador.defaultProps = {
  initialCounter: 0
};

// Desde este componente padre App renderizamos el componente Hello, Text y Contador; notar que a cada uno le mandamos propiedades; estas propiedades deben de tener el mismo nombre aquí y cuando las recibimos en los componentes respectivos
class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <Hello title='Estas son las props que madamos/recibimos en el componente Hello'/>
        </div>

        <p className="App-intro">
          Principios de React:
        </p>

        <Text 
        myText='Propiedad texto del componente Text' 
        myNumber={ 2 } 
        myBoolean={ true } 
        arrayNumbers={ [ 2, 3, 10 ] }
        objectsInfo= { { firstKey: 'First value of the first key', secondKey: 'Second value of the second key' } }
        multiplyFunction = { (number)=> number * 4 }
        title = { <h1>Este es un título</h1>   } 
        myDefaultProps= 'Estas props por defecto han cambiado porque las mandamos en este componente Text'/> 

        <Contador initialCounter = { 100 }/>

        <ConditionalComponent/>

      </div>
    );
  }
}

export default App;
