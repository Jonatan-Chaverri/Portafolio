import React, { Component } from 'react'

import { HeaderBar } from  '../components'
import { ABOUT_TEXT } from '../strings'

import ABOUT_IMG_1 from '../images/about1.jpeg'
import ABOUT_IMG_2 from '../images/about2.jpeg'
import ABOUT_IMG_3 from '../images/about3.jpeg'

class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <HeaderBar/>
                </div>
                <div className="home__front-page">
                    <div className="home_front-space-container"></div>
                    <div className="home_front-page-text-container">
                        <div className="home_front-page-text-name">
                            Jonatan Chaverri
                        </div>
                        <div className="home_front-page-text-title">
                            Software Engineer
                        </div>
                        <div className="home_front-page-text-location">
                            San Jose, Costa Rica
                        </div>
                    </div>
                </div>
                <div className="home-body">
                    <div className="home__about">
                        <div className="home__about-description">
                            <div className="home__about-description-title"> Hello... </div>
                            <div>
                                { ABOUT_TEXT }
                            </div>
                        </div>
                        <div className="home__about-images-container">
                            <div className="home__about-images-wrapper">
                                <div className="home__about-image-one">
                                    <img src={ ABOUT_IMG_1 } width="320rem"/>
                                </div>
                                <div className="home__about-image-two">
                                    <img src={ ABOUT_IMG_2 } height="300rem"/>
                                </div>
                                <div className="home__about-image-three">
                                    <img src={ ABOUT_IMG_3 } width="300rem"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
