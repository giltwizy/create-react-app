import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function App() {
    return (
        <NavBar />
    );
}

const NavBar = () => {    
    var logoSource = "https://crdbbank.co.tz/wp-content/uploads/2020/08/crdb-logo.jpg"
    return (
        <header>
            <a href="./index.html"><img src={logoSource} alt="crdb logo" className="logo"/></a>
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

ReactDom.render(
    <App />,
    document.getElementById('root')
);
