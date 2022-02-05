import React, { Component } from 'react'


class HeaderBar extends Component {

    render() {
        return (
            <div className="header-bar">
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
