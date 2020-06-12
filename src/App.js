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
    const myBooleanText = this.props.myBoolean ? 'True' : 'False';

    const mappedArrayNumbers = this.props.arrayNumbers.map( number => number*2 );

    return (
      <div className="main-div">
        <p>{ this.props.myText }</p>
        <p>{ this.props.myNumber }</p>
        <p>{ JSON.stringify(this.props.myBoolean) }</p>
        <p>{ myBooleanText } </p>  

        <p>{ this.props.arrayNumbers.join(' , ') }</p>
        <p>{ mappedArrayNumbers.join(' , ') }</p> 
        <p>{ this.props.objects.key }</p>

      </div>
    );
  }
}

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
        objects= {{ key: 'First value', key2: 'Other value' }}/> 
      </div>
    );
  }
}

export default App;
