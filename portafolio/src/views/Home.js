import React, { Component } from 'react'

import { HeaderBar } from  '../components'

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
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make
                                a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
