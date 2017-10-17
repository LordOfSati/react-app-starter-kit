import React, { Component } from 'react'
import NavigationBar from './../components/NavigationBar.jsx'
import Banner from './../components/home/Banner.jsx'

class Home extends Component {
    render () {
        return (
            <div>
                <NavigationBar />
                <Banner />
            </div>
        )
    }
}

export default Home
