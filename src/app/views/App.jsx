import React, { Component } from 'react'
import NavigationBar from './../components/NavigationBar.jsx'
import Content from './Content.jsx'

class App extends Component {
    render () {
        return (
            <div>
                <NavigationBar />
                <Content />
            </div>
        )
    }
}

export default App
