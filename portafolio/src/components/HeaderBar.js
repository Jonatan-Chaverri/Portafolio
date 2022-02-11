import React, { Component } from 'react'


class HeaderBar extends Component {

    componentDidMount() {
        window.onscroll = () => {
            const element = document.getElementById("header-bar")
            let opacity = window.pageYOffset/400
            element.style.background = `rgba(25, 118, 190, ${opacity})`
        }
    }

    render() {
        return (
            <div className="header-bar" id="header-bar">
                <div className="header-bar__title">
                    Jonatan Chaverri
                </div>
                <div className="header-bar__menu">
                    <div className="header-bar__menu-item"> About </div>
                    <div className="header-bar__menu-item"> Projects </div>
                    <div className="header-bar__menu-item"> Contact </div>
                </div>
            </div>
        )
    }
}

export default HeaderBar
