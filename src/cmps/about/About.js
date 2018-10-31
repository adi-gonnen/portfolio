import React, { Component } from 'react';
import './About.css';

class About extends Component {
    
    render() {
        return (
            <div className="about">
                <h1>about</h1>
                <div className="about-text-container"> 
                    <p className="about-text">We all know stories about developers who worked for couple of years at High-Tech companies, and then open a gelateria or something like that.
                        Well, my story is opposite: I've been working for 10 years as an ice cream developer (as a project manager at Nestle Ice Cream), and then found out the coding- and got in love.
                        So I turned to a new way and graduated the Coding Academy school as Fullstack developer.<br/>
                        My expertise is to build a single page application from scratch- with the cutting edge technology, server side and client side, advanced framework like Vue or React and responsive design.<br/>
                        {/* I have a practical knowledge at: Java Script, ES6, Html, CSS, SCSS, AJAX, MVC and responsive design.<br/>
                        In the server side I worked with Node.JS, MongoDB and rest-API.<br/>
                        The frameworks I worked with are Vue.js (include VueX and Vue-Cli) and React. */}
                        This page was written in React. 
                    </p>
                    <div className="labels flex">
                        <p>Java Script</p>
                        <p>ES6</p>
                        <p>Html</p>
                        <p>CSS</p>
                        <p>SCSS</p>
                        <p>AJAX</p>
                        <p>Axios</p>
                        <p>MVC</p>
                        <p>Node.JS</p>
                        <p>MongoDB</p>
                        <p>Vue.js</p>
                        <p>VueX</p>
                        <p>React</p>
                    </div>
                    <ul className="education-list flex column">
                        <li>Coding Academy- Fullstack Developer Bootcamp</li>
                        <li>M.Sc at BioChemistry- the Hebrew University</li>
                        <li>B.Sc at Biotechnology- Ben-Gurion University</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default About;