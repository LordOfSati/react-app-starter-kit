import React, { Component } from 'react'

class Home extends Component {
    render () {
        return (
            <div id="home-content">
                <div id="banner">
                    <div className="content">
                        <h3 className="display-5">Home Page Banner</h3>
                        <p className="lead">And, the description goes here</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
