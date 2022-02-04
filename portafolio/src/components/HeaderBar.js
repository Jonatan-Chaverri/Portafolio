import React, { Component } from 'react'


class HeaderBar extends Component {

    render() {
        return (
            <div className="header-bar">
                <div className="header-bar__title">
                    Jonatan Chaverri
                </div>
                <nav className="header-bar__menu">
                    <ul>
                        <li> About </li>
                        <li> Projects </li>
                        <li> Contact </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default HeaderBar
