import React from 'react'
import './Banner.css'
import Fab from '../img/1.jpg'
const Banner = () => {

    return (
        <div className="banner">
            <div className="img-fold">
                <img src={Fab}  alt="bannerr image" />
            </div>
            <div className="upper">
                <h1>we make  world best website</h1>
                <p style={{fontSize:"1.2rem"}}>we are the best in the world just rely on us</p>
                <span><strong className="game">Click more</strong></span>
            </div>
        </div>
    )
}

export default Banner
