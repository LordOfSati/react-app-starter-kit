import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home.jsx'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import NavigationBar from './../components/common/NavigationBar.jsx'
import Footer from './../components/common/Footer.jsx'

class App extends Component {
    render () {
        return (
            <div id="wrapper">
                <NavigationBar />
                <div id="content">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={AboutUs} />
                        <Route exact path='/contact' component={ContactUs} />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
