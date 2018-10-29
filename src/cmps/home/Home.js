import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Home.css';
import Portfolio from '../portfolio/Portfolio'
import About from '../about/About'
import Contact from '../contact/Contact';

class Home extends Component {

    render() {
        const imgStyle = {
            backgroundImage: 'url(img/puzzle.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '500px',
            width: '100%',
            zIndex: '1',
            opacity: '0.5'
        }
        return (
            <div id="home" className="home">
                <div style={imgStyle} className="home-img"></div>
                <div className="home-container flex column">
                    <div className="home-title flex">
                        <img src='img/adi.jpg' alt= ''/>
                        <div className="home-details flex column">
                            <h1>Adi Gonnen</h1>
                            <h3>full-stack developer</h3>
                        </div>
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
                </div>
            </div>
        )
    }
}
export default Home;
