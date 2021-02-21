import React from 'react'
import ReactDom from 'react-dom'
import './css/index.css'
import cocacola1 from './img/cocacola1.png'
import cocacola2 from './img/cocacola2.png'
import cocacola3 from './img/cocacola3.png'
import cocacola4 from './img/cocacola4.png'
import cocacola5 from './img/cocacola5.png'
import cocacola6 from './img/cocacola6.png'
import facebookIcon from './img/facebook.png'
import twitterIcon from './img/twitter.png'
import instagramIcon from './img/instagram.png'
import ScriptTag from 'react-script-tag'

function App() {
    return (
        <section>
            <Circle />
            <NavBar />
            <SwipperJs />
            <Content />
            <SocialMediaIcons />
        </section>
    );
}

const NavBar = () => {

    return (
        <header>
            <a href="./index.html"><img src="./logo.png" alt="crdb logo" className="logo" /></a>
            <nav>
                <ul className="navigation">
                    <li>
                        <a href="https://google.com">Home</a>
                    </li>
                    <li>
                        <a href="https://google.com">Our Menu</a>
                    </li>
                    <li>
                        <a href="https://google.com">Whats New?</a>
                    </li>
                    <li>
                        <a href="https://google.com">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

const Circle = () => {
    return <div className="circle"></div>;
}

const Content = () => {
    return (
        <div className="content">
            <div className="text-box">
                <h2>Taste the feeling</h2>
                <p>The main leading distributer of Coca-Cola softdrinks across Tanzania,managing large scale to small scale retailers across every inch so as to sastify the thirst of our beloved customers.As we are celebrating 128 years of our success we are giving our many giveaways.Stay tune with us</p>
                <a href="https://google.com">Learn More</a>
            </div>
            <ImageSwipper />
        </div>
    );
}

const SwipperJs = props => (
    <ScriptTag type="text/javascript" src="https://unpkg.com/swiper/swiper-bundle.min.js" />
    )

const ImageSwipper = () => {
    return (
        <div className="image-box">
            {/* Swiper */}
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src={cocacola1} alt="Cocacola 1" /></div>
                    <div className="swiper-slide"><img src={cocacola2} alt="Cocacola 2" /></div>
                    <div className="swiper-slide"><img src={cocacola3} alt="Cocacola 3" /></div>
                    <div className="swiper-slide"><img src={cocacola4} alt="Cocacola 4" /></div>
                    <div className="swiper-slide"><img src={cocacola5} alt="Cocacola 5" /></div>
                    <div className="swiper-slide"><img src={cocacola6} alt="Cocacola 6" /></div>
                </div>
            </div>
        </div>
    );
}

const SocialMediaIcons = () => {
    return (
        <ul className="sci">
            <li>
                <a href="https://facebook.com/giltwizy"><img src={facebookIcon} alt="Facebook logo" /></a>
            </li>
            <li>
                <a href="https://instagram.com/giltwizy"><img src={instagramIcon} alt="Instagram logo" /></a>
            </li>
            <li>
                <a href="https://twitter.com/giltwizy"><img src={twitterIcon} alt="Twitter logo" /></a>
            </li>
        </ul>

    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);
