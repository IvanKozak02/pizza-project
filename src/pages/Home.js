import React from 'react';
import {Link} from "react-router-dom";
import pizza from '../assets/images/pizza.jpeg'
import '../App.css'
function Home() {
    return (
        <div className="home">
            <div className="header-container"
                 style={{
                     backgroundImage:`url(${pizza})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover'
            }}>
                <h1>Ivano`s pizza</h1>
                <p>THE BEST PIZZA OVER THE WORLD</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;