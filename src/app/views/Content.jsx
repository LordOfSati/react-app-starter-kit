import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'

class Content extends Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={AboutUs} />
                <Route exact path='/contact' component={ContactUs} />
            </Switch>
        )
    }
}

export default Content
