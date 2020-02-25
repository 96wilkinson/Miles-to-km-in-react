import React from 'react';
import './App.css';
import Converter from './Converter.js'


class App extends React.Component{

  render() {
    return (//seperate this component as it allows for re-useability for the future
      <div className="App">
      <Converter/> 
      </div>
    );
  }
}

export default App;
