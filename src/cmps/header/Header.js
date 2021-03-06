import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    toggleMenu = () => {
        document.querySelector('.nav-mobile').classList.toggle('close');
        document.querySelector('.animated-icon').classList.toggle('open');
    }
    render() {
        return (
            <div className="header flex">
                <div className="nav-home">
                    <a href="#home" className="a-link">
                        <img src='img/adi.jpg' alt= ''/>
                    </a>
                </div>
                <ul className="nav flex">
                    <li>
                       <a href="#about" className="a-link">about</a>
                    </li>
                    <li>
                       <a href="#portfolio" className="a-link">portfolio</a>
                    </li>
                    <li>
                       <a href="#contact" className="a-link">contact</a>
                    </li>
                </ul>
                <div className="navbar-toggler" onClick={this.toggleMenu} >
                    <div className="animated-icon"><span/><span/><span/></div>
                </div>
                <ul className="nav-mobile flex column close">
                    <li>
                       <a href="#about" className="a-link" onClick={this.toggleMenu}>about</a>
                    </li>
                    <li>
                       <a href="#portfolio" className="a-link" onClick={this.toggleMenu}>portfolio</a>
                    </li>
                    <li>
                       <a href="#contact" className="a-link" onClick={this.toggleMenu}>contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}