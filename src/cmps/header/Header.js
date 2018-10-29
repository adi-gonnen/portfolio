import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    
    render() {
        return (
            <div className="header flex">
                <div className="nav-home">
                    <a href="#home" className="a-link">
                        <img src='img/adi.jpg' alt= ''/>
                    </a>
                </div>
                <ul className="nav-links flex">
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