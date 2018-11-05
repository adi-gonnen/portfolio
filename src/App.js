import React, { Component } from 'react';
import './App.css';
import Header from './cmps/header/Header';
import Home from './cmps/home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone)
library.add(faEnvelope)

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
