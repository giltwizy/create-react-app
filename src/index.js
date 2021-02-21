import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import cocacola1 from './cocacola1.png'
import cocacola2 from './cocacola2.png'
import cocacola3 from './cocacola3.png'
import cocacola4 from './cocacola4.png'
import cocacola5 from './cocacola5.png'
import cocacola6 from './cocacola6.png'

function App() {
    return (
        <section>
            <Circle />
            <NavBar />
            <Content />
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

ReactDom.render(
    <App />,
    document.getElementById('root')
);
