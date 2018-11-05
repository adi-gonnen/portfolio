import React, { Component } from 'react';
import './About.css';

class About extends Component {
    
    render() {
        return (
            <div className="about">
                <h1>about</h1>
                <div className="about-text-container"> 
                    <p className="about-text">We all know stories about developers who worked for couple of years at high-tech companies, and then opened a gelateria or something like that.
                        Well, my story goes the opposite way: I've been working for 10 years as an ice cream developer (as a project manager at Nestle Ice Cream), and then discovered coding- and felt in love.
                        So I took a new path and graduated the Coding Academy school as Fullstack developer.<br/>
                        My expertise is building single page applications from scratch- using the cutting edge technologies, server side and client side, advanced frameworks like Vue or React and responsive design.<br/>
                        This page was written in React. 
                    </p>
                    <div className="bold">My expertise:</div>
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
                        <p>Vuex</p>
                        <p>React</p>
                    </div>
                    <div className="bold">Education:</div>
                    <ul className="education-list flex column">
                        <li>Coding Academy- Fullstack Developer Bootcamp</li>
                        <li>M.Sc at BioChemistry- the Hebrew University</li>
                        <li>B.Sc at Biotechnology- Ben-Gurion University</li>
                    </ul>
                    <div src="img/CV_adi_gonnen.pdf" className="bold">
                        <a href="img/CV_adi_gonnen.pdf" className="cv" target="_blank">Watch My CV (pdf)</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;