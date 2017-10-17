import React, { Component } from 'react'

class Banner extends Component {
    render () {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h3 className="display-5">Home Page Banner</h3>
                    <p className="lead">And, the description goes here</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Banner
