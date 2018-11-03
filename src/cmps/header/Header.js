import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    toggleMenu = () => {
        document.querySelector('.nav-mobile').classList.toggle('close');
        // document.querySelector('.mobile-menu').classList.toggle('open-mobile');
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
                <div className="mobile-menu" onClick={this.toggleMenu}>
                    <div className="line line01"></div>
                    <div className="line line02"></div>
                    <div className="line line03"></div>
                </div>
                <ul className="nav-mobile flex column close">
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
            </div>
        )
    }
}