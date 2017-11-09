import React, { Component } from 'react'
import NavigationBar from './../components/common/NavigationBar.jsx'
import Content from './Content.jsx'
import Footer from './../components/common/Footer.jsx'

class App extends Component {
    render () {
        return (
            <div id="wrapper">
                <NavigationBar />
                <div id="content">
                    <Content />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
