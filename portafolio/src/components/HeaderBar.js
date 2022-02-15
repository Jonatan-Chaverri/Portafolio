import React, { Component } from 'react'

import { FaBars } from 'react-icons/fa'


class HeaderBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            showMenu: window.innerWidth < 575,
            isMenuOpen: false
        }

        this.displayMenu = this.displayMenu.bind(this)
        this.openCloseMenu = this.openCloseMenu.bind(this)
    }

    /*
     * Event Listener function to display menu in case screen size is resize
     * to less than 575px
     */
    displayMenu(){
        this.setState({
            showMenu: window.innerWidth < 570,
            isMenuOpen: false
        })
    }

    /*
     * Callback function for when user clicks on menu icon
     */
    openCloseMenu(){
        const { isMenuOpen } = this.state
        this.setState({
            isMenuOpen: !isMenuOpen
        })
    }

    componentDidMount() {
        const { displayMenu } = this
        window.addEventListener('resize', displayMenu)
        window.onscroll = () => {
            const element = document.getElementById("header-bar")
            let opacity = window.pageYOffset/400
            element.style.background = `rgba(25, 118, 190, ${opacity})`
        }
    }

    render() {
        const { showMenu } = this.state
        const { openCloseMenu } = this
        return (
            <div className="header-bar" id="header-bar">
                <div className="header-bar__title">
                    Jonatan Chaverri
                </div>
                {
                    showMenu ?
                    <div className="header-bar__collapsed-menu">
                        <label
                          type="button"
                          onClick={ openCloseMenu }>
                          <FaBars/>
                        </label>
                    </div> :
                    <div className="header-bar__menu">
                        <div className="header-bar__menu-item"> About </div>
                        <div className="header-bar__menu-item"> Projects </div>
                        <div className="header-bar__menu-item"> Contact </div>
                    </div>
                }
            </div>
        )
    }
}

export default HeaderBar
