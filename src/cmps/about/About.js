import React, { Component } from 'react';

class About extends Component {
    
    render() {
        return (
            <div className="about">
                <p>We all know stories about developers who worked for couple of years in High-Tech companies, and then open a gelateria or something like that.
                    Well, my story is opposite: I've been working for 10 years as an ice cream developer, and then found out the coding- and got in love.
                    So after being a project manager at Nestle Ice Cream, I turned to a new way and graduated the Coding Academy school as Fullstack developer.<br/>
                    I have a practical knowledge at: Java Script, ES6, Html, CSS, SCSS, AJAX, MVC and responsive design.<br/>
                    In the server side I worked with Node.JS, MongoDB and rest-API.<br/>
                    The frameworks I worked with are Vue.js (include VueX and Vue-Cli) and React.
                    This page was written in React.
                </p>
                <ul>
                    <li>Coding Academy- Fullstack developer Bootcamp</li>
                    <li>B.Sc at BioTechnology- Ben-Gurion University</li>
                    <li>M.Sc at BioChemistry- the Hebrew University</li>
                </ul>
            </div>
        )
    }
}
export default About;