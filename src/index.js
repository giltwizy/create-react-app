import React from 'react'
import ReactDom from 'react-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

// Import custom styles
import './css/index.css'

// Import image resources
import chinaUnionPay from './img/China-Union-Pay.png'
import platinumMasterCard from './img/Platinum-MasterCard.png'
import temboCard from './img/Tembo-Card-5.png'
import temboCardInfinite from './img/TemboCard-Infinite.png'
import temboCardMasterCard from './img/TemboCard-MasterCard.png'
import temboCardVisaGold from './img/TemboCard-Visa-Gold.png'
import temboCardVisa from './img/TemboCard-Visa.png'
import temboCardPlatinumVisa from './img/Tembocard-platinum-Visa.png'
import cardTanapa from './img/card-tanapa.png'
import facebookIcon from './img/facebook.png'
import twitterIcon from './img/twitter.png'
import instagramIcon from './img/instagram.png'

function App() {
    return (
        <section>
            <Circle />
            <NavBar />
            <Content />
            <SocialMediaIcons />
        </section>
    );
}

const Circle = () => {
    return <div className="circle"></div>
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

const Content = () => {
    return (
        <div className="content">
            {/* <TextBox /> */}
            <ImageBox />
        </div>
    );
}

const TextBox = () => {
    return (
        <div className="text-box">
            <h2>Taste the feeling</h2>
            <p>The main leading distributer of Coca-Cola softdrinks across Tanzania,managing large scale to small scale retailers across every inch so as to sastify the thirst of our beloved customers.As we are celebrating 128 years of our success we are giving our many giveaways.Stay tune with us</p>
            <a href="https://google.com">Learn More</a>
        </div>
    );
}

const ImageBox = () => {
    return (
        <div className="image-box">
            {/* Swiper */}
            <div className="swiper-container">
                <Swiper
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={chinaUnionPay} alt="China Union Pay" /></SwiperSlide>
                    <SwiperSlide><img src={platinumMasterCard} alt="Platinum Mastercard" /></SwiperSlide>
                    <SwiperSlide><img src={temboCard} alt="Tembocard" /></SwiperSlide>                    
                    <SwiperSlide><img src={temboCardInfinite} alt="Tembocard Infinite" /></SwiperSlide>
                    <SwiperSlide><img src={temboCardVisaGold} alt="Tembocard Visa Gold" /></SwiperSlide>
                    <SwiperSlide><img src={temboCardMasterCard} alt="Tembocard Mastercard" /></SwiperSlide>
                    <SwiperSlide><img src={temboCardVisa} alt="Tembocard Visa" /></SwiperSlide>
                    <SwiperSlide><img src={temboCardPlatinumVisa} alt="Tembocard Platinum visa" /></SwiperSlide>
                    <SwiperSlide><img src={cardTanapa} alt="Tanapa card" /></SwiperSlide>
                </Swiper>
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
