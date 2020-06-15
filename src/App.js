import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      </div>
    );
  }
}

export default App;
