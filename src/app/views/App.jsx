import React, { Component } from 'react'
import NavigationBar from './../components/NavigationBar.jsx'
import Content from './Content.jsx'
import Footer from './../components/Footer.jsx'

class App extends Component {
    render () {
        return (
            <div>
                <NavigationBar />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default App
