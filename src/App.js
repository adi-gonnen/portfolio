import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
import ProjService from './ProjService'
import Header from './cmps/header/Header';
import Home from './cmps/home/Home';
import About from './cmps/about/About';
import Portfolio from './cmps/portfolio/Portfolio';
import Contact from './cmps/contact/Contact';

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
