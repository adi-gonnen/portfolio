import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Home.css';
import Portfolio from '../portfolio/Portfolio'
import About from '../about/About'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

class Home extends Component {

    render() {
        const imgStyle = {
            backgroundImage: 'url(img/puzzle.jpg)'
        }
        return (
            <div id="home" className="home">
                <div style={imgStyle} className="home-img"> </div>
                <div className="home-container flex column">
                    <div className="home-title flex column">
                        {/* <div className="home-details flex column"> */}
                            <h1>Adi Gonnen</h1>
                            <h3>full-stack developer</h3>
                        {/* </div> */}
                    </div>
                    <h1>welcome to my portfolio</h1>
                </div>
                <div className="cmps-container">
                    <ScrollableAnchor id={'about'}>
                        <About />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'portfolio'}>
                        <Portfolio />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'contact'}>
                        <Contact />
                    </ScrollableAnchor>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Home;
